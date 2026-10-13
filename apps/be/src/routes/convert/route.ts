import { Router } from "express";
const router = Router();
import {prisma} from "@repo/db";
import {  generateIds } from "../../utils";

const DOMAIN = `http://localhost:8080/api/v1/url`;
console.log("Domain", DOMAIN)

router.post("/convert", async (req, res)=>{
    const {longUrl} = req.body;
    console.log(`Long url ${longUrl}`)
    
    try {
    const parsed = new URL(longUrl);
    if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
  } catch (e) {
    return res.status(400).json({ message: "Invalid URL", error : `${e}` });
  }
    
    try{
        const exist = await prisma.urls.findFirst({where : {
            longUrl : longUrl
        }});
        if (exist) {
      return res.status(200).json({
        message: "Url already shortened",
        url: `${DOMAIN}/${exist.shortUrl}`,
      });
    }
    
      const code = async (code : string)=>{
          await prisma.urls.create({
            data : {
                shortUrl : code,
                longUrl : longUrl
            }
          });
      }

      const shortCode = await generateIds(code);

      return res.status(201).json({ url: `${DOMAIN}/${shortCode}` });

    }
    catch(error){
        console.log(`error ${error}`);
    }
});

router.get("/:short", async (req, res)=>{
    const shortIdx = req.params.short;
    console.log(`Short url ${shortIdx}`);

    try{
        const find  =  await prisma.urls.findUnique({where : {
            shortUrl : shortIdx
        }});
        console.log(`Find`, find);
        if(!find){
           return res.status(404).json({ message: "Short URL not found" });
        }

        return res.redirect(302, find.longUrl);
    }
    catch(e){
       console.error(e);
    return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;