"use client";
import { Input } from "@base-ui/react/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValid } from "@/utils";

const Convert = ()=>{
    const [url, Seturl] = useState<string>("");
    const [isLoading, setisLoading] = useState<boolean>(false);
    const router = useRouter();

    const shortenurl = async ()=>{
        const check = isValid(url);
        if(check){
            Seturl("");
            alert("URL not valid")
            return;
        }
        
        try{
            setisLoading(true);
            const send = await axios.post(`${process.env.NEXT_PUBLIC_BE_URL}/api/v1/url/convert`, {
                longUrl : url        
            });

            if(!send.data.url){
                alert("Failed to convert");
                Seturl("");
                return;
            }

            Seturl("");
            setisLoading(false);

            router.push(`/result?short=${encodeURIComponent(send.data.url)}`);
        }
        catch(e){
            console.log("Failed to shortned url", e);
        }
    }

    return <>
    <div className="flex justify-center py-10 text-center">
        <div className="flex flex-col gap-40">

        <div className="flex flex-col justify-center">
            {
                isLoading && <>
                <h1>
                    Converting...
                </h1>
                </>
            }
            <div className="flex flex-row justify-center gap-2">
            <h1 className="text-4xl text-blue-500 font-mono">Short</h1>
            <h1 className="text-4xl text-blue-500 font-mono">Url</h1>
            </div>
            <div className="flex flex-row justify-center gap-2">
            <h1 className="text-3xl text-blue-500 font-mono">with❤️‍🔥</h1>
            </div>
        </div>

        <div className="flex flex-col gap-3 bg-gray-50 shadow-2xl top-100 space-y-10 space-x-17 rounded-xl">
       <div className="flex justify-center text-center items-center">
        <h1 className="text-3xl text-black font-semibold text-center">Paste the url to be shortened
        </h1>
       </div>

       <div className="flex flex-col gap-4 min-w-full">

        <div>
            <Input value={url} onChange={(e)=>Seturl(e.target.value)} placeholder="Enter the link here"  className="border-black outline px-6 rounded-lg w-130 h-9" />
        </div>

        <div className="flex justify-center">
            <Button disabled={!url} onClick={shortenurl} variant="outline" className="text-white bg-blue-400 cursor-pointer border-white">Shorten the URL</Button>
        </div>

       </div>

         <div>
        <h1 className="text-sm py-2 text-black">ShortURL is a free tool to shorten URLs and generate short links
URL shortener allows <br />  to create a shortened link making it easy to share
</h1>
       </div>
    
        </div>
        </div>
        
    </div>
    </>
}

export default Convert;