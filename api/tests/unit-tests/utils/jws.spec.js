
const { encode,decode } = require("../../../src/utils/jws")
const mongoose = require('mongoose')


const user={
    "id":new mongoose.Types.ObjectId('ABCD1234567890ABCDACBFFF'),
    "email": "ferid@gmail.com",
    "role": "user"
}

describe('Jws Test Suit',()=>{
    test('encode will return JsonWebToken for a given id,email and role',()=>{
        const result = encode(user.id,user.email,user.role);
        expect(result).not.toBe("undefined")
    })
    test('decode will return user form a given token',()=>{
        const result = decode(encode(user.id,user.email,user.role));
        expect(result).not.toBe("undefined")
        expect(result.user_id).toEqual(user.id.toString())
        expect(result.email).toEqual(user.email)
        expect(result.role).toEqual(user.role)
    })
})