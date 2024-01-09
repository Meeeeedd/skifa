const jwt = require('jsonwebtoken');

const encode=(id,email,role)=>{
    return jwt.sign(
        { user_id: id, email: email, role: role }, process.env.SECRET_KEY || 'BLABLA', { expiresIn: "30d" }
      )
}

const decode=(token)=>{
    return jwt.verify(token,process.env.SECRET_KEY || 'BLABLA')
}

module.exports={
    encode,
    decode
}