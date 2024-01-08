const userService=require('../services/user.services');

const getOthersController =async (req,res,next)=>{
    try {
        if(!req.user){
            next(new Error('Your are not authenticated yet get Other people'))
        }
        console.log(req.user)
        const {user_id}=req.user;
        const others = await userService.getOthers(user_id)
        res.status(200)
           .json({others})
        
    } catch (error) {
        next(error)
    }
}

module.exports={
    getOthersController
}