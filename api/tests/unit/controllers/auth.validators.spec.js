const { validateRegisterDTO } = require("../../../src/controllers/auth/auth.validators")

describe('Auth Valiators Test Suit',()=>{
    test('Should Succes to validate a valid registerDTO',()=>{
        //Assert
        const registerDTO={
            email:"helaliferid@gmail.com",
            username:"helaliferid",
            password: "toto2024"
        }

        //ACT
        const result = validateRegisterDTO.validate(registerDTO);

        //Expect or Assert
        expect(result).not.toBe(undefined)
        expect(result).toHaveProperty('value');
        expect(result).not.toHaveProperty('error')
        expect(result.value).not.toBe(undefined)
    })

    test('Should fail to validate a registerDTO wiht out email',()=>{
        //Assert
        const registerDTO={
            username:"helaliferid",
            password: "toto2024"
        }

        //ACT
        const result = validateRegisterDTO.validate(registerDTO);
        
        //Expect or Assert
        expect(result).not.toBe(undefined)
        expect(result).toHaveProperty('error')
    })
    test('Should fail to validate a registerDTO wiht invalid email',()=>{
        //Assert
        const registerDTO={
            email:"mahdia",
            username:"helaliferid",
            password: "toto2024"
        }

        //ACT
        const result = validateRegisterDTO.validate(registerDTO);
        
        //Expect or Assert
        expect(result).not.toBe(undefined)
        expect(result).toHaveProperty('error')
    })

    test('Should fail to validate a registerDTO wihtout username',()=>{
        //Assert
        const registerDTO={
            email:"helaliferid@gmail.com",
            password: "toto2024"
        }

        //ACT
        const result = validateRegisterDTO.validate(registerDTO);
         //Expect or Assert
        expect(result).not.toBe(undefined)
        expect(result).toHaveProperty('error')
    })

    test('Should fail to validate a registerDTO wiht username shorter than 3 chars',()=>{
        //Assert
        const registerDTO={
            email:"helaliferid@gmail.com",
            username:"fe",
            password: "toto2024"
        }

        //ACT
        const result = validateRegisterDTO.validate(registerDTO);

         //Expect or Assert
        expect(result).not.toBe(undefined)
        expect(result).toHaveProperty('error')
    }),
    test('Should fail to validate a registerDTO wihtout password',()=>{
        //Assert
        const registerDTO={
            email:"helaliferid@gmail.com",
            user:"feridhelali",
        }

        //ACT
        const result = validateRegisterDTO.validate(registerDTO);

         //Expect or Assert
        expect(result).not.toBe(undefined)
        expect(result).toHaveProperty('error')
    })
})