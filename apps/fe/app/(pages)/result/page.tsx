"use client";
import { Input } from "@base-ui/react/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Result = ()=>{
    const params = useSearchParams();
    const short = params.get("short");

    if (!short) return <p>No URL found.</p>;

    return <>
    <Suspense fallback={null}>

    <div className="flex justify-center py-10">
        <div className="flex flex-col gap-30">

             <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center gap-2">
            <h1 className="text-4xl text-blue-500 font-mono">Short</h1>
            <h1 className="text-4xl text-blue-500 font-mono">Url</h1>
            </div>
            <div className="flex flex-row justify-center gap-2">
            <h1 className="text-3xl text-blue-500 font-mono">with❤️‍🔥</h1>
            </div>
        </div>



        <div className="flex flex-col gap-30">

         <div className="flex flex-col">
            <div className="">
                    <h1 className="text-3xl font-bold">Your shortened URL</h1>
            </div>
             <div className="">
                    <h1 className="text-sm">Copy the short link and share it in messages, texts, posts, websites and other locations.</h1>
            </div>
            
            <div className="">

            </div>
        </div>

        <div className="flex flex-col gap-3 bg-gray-50 shadow-2xl space-y-10 space-x-17 rounded-xl text-center">

       <div className="flex flex-col gap-4 min-w-full">

        <div>
            <Input value={short} placeholder="URL"  className="border-black text-blue-400 outline px-6 rounded-lg w-130 h-9" />
        </div>

        <div className="flex justify-center">
            <Button onClick={()=>navigator.clipboard.writeText(short)} variant="outline" className="text-white bg-blue-400 cursor-pointer border-white">Copy URL</Button>
        </div>

       </div>

         <div>
        <h1 className="text-sm py-2 text-black">
            <ul className="list-disc list-inside marker:text-black space-y-2">
                <li>
            Short URLs that do not have at least one click per month are disabled
                </li>
            </ul>

</h1>
       </div>
    
        </div>
        </div>
        </div>
        
    </div>
    </Suspense>
    </>
}

function ResultPage() {
    return (
        <Suspense fallback={null}>
            <Result />
        </Suspense>
    );
}

export default ResultPage;