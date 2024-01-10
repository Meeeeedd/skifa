const authService=require('../../services/auth.services')
const {validateRegisterDTO,validateLoginDTO} =require('./auth.validators');

const register =async (req,res,next)=>{
   try {
      const user=req.body;
      const {error} = validateRegisterDTO.validate(user)
      if(error){
         return res.status(406).json(error)
      }
      const result=await authService.registerUser(user)
      return res.status(201).json(result)
   } catch (error) {
    next(error)
   }

}

const login=async (req,res,next)=>{
    try {
        const credentials=req.body;
        const {error} = validateLoginDTO.validate(credentials)
         if(error){
            return res.status(406).json(error)
         }
        const result=await authService.loginUser(credentials)
        return res.json(result)
     } catch (error) {
      next(error)
     }
}

module.exports={
    register,
    login
}