import userModel  from '../models/userModel.js'
import bcrypt from 'bcrypt'
export const registerController = async(req, res, next)=>{

    try{
        const {name, email, password} = req.body

        //validate
        if(!name){
           next('name is required')
        }
        if(!email){
            next('please provide the email')
        }
        if(!password){
            next('please provide the password')
        }
       
        //check the stored data
        const existingUser = await userModel.findOne({email})

        console.log(existingUser)

        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Email is already there'
            })
        }

        //store the data
        const newUser = {
            name:name,
            email:email,
            password: bcrypt.hashSync(password)
        }
       

        const user = userModel.create(newUser)
        res.status(200).send({ 
            success:true,
            message:'User is registered successfully',
            user
        })

    }catch(err){
        next('Eroor in register controller')
    }
}

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            next('provide all fields')
        }


        const user = await userModel.findOne({ email })
        console.log(user)

        if (!user) {
            next('invalid email and password')
        }

        const isPassword = bcrypt.compareSync(password,user.password)
        if(!isPassword){
            res.status(400).json({
                success: false,
                message: 'passsword inccorect',
            })
        }

        res.status(200).json({
            success: true,
            message: 'Login successfully',
            user
        })
    } catch (err) {

    }
}