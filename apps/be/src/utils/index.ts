import { customAlphabet } from "nanoid";

const nano  = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 7);

export const generateIds = async (save : (code : string)=>Promise<void>)=>{
        for(let attemps = 0; attemps<5; attemps++){
            const code = nano();
            try{
                await save(code);
                return code;
            }
            catch(error){
                console.log("Code isn't unique");
            }
        }
};