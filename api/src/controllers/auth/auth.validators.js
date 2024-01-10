const joi = require('joi')

const validateRegisterDTO = joi.object({
    email:joi.string().email().trim(true).required(),
    username:joi.string().alphanum().min(3).max(25).trim(true).required(),
    password: joi.string().min(8).trim(true).required()
})

const validateLoginDTO = joi.object({
    email:joi.string().email().trim(true).required(),
    password: joi.string().min(8).trim(true).required()
})



module.exports={
    validateRegisterDTO,
    validateLoginDTO
}