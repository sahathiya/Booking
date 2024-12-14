const joi=require('joi')
//signup joischema
const joiUserSchema=joi.object({
    
    email:joi.string(),
    password:joi.string(),
    cpassword:joi.string(),
    admin:joi.boolean().optional(),
    block:joi.boolean().optional()
})

//login schema
const joiLoginSchema=joi.object({
    email:joi.string(),
    password:joi.string()

})

module.exports={joiUserSchema}