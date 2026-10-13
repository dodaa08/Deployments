export const isValid = (url : string)=>{
    try{
        const check = new URL(url);
        return check.protocol == "http" || check.protocol == "https";
    }
    catch(e){
        return false
    }
}