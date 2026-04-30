
import { useEffect, useState } from "react"

export default function TestHeader({testDetails, secLeft}){
    

    const timeFormat = (secLeft) =>{
        const hour = Math.floor(secLeft / 3600);
        const minute = Math.floor(secLeft / 60) % 60;
        const sec = secLeft % 60;

        return `${hour > 0 ? (hour.toString().padStart(2,"0") + ":") : ""}${minute.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
    }

    return <header className="w-full py-2 md:py-4 px-2 md:px-6 flex justify-between items-center">
        {/* PlatformName */}
        <div>
            <img src="/brandName_Light.png" alt="ApexPrep AI" className="dark:hidden w-45 md:w-60" />
            <img src="/brandName_Dark.png" alt="ApexPrep AI" className="w-45 md:w-60 hidden dark:inline" />
        </div>
        <div>
            <h1 className="text-3xl hidden md:inline font-bold text-slate-900 dark:text-slate-200">
                {testDetails?.examName}
            {testDetails?.subjectName && <span className="text-2xl">: {testDetails.subjectName}</span> }</h1>
        </div>
        <div className={`text-2xl font-mono font-semibold ${secLeft < 30 ? "animate-pulse text-red-600":"text-gray-800 dark:text-slate-300"}`}>
            {/* Timer that start countdown when pretest is false and countdown start from testDetails.durationInMin and blink when less than 30 sec and triggers auto submit when 0s*/}
            {timeFormat(secLeft)}
        </div>
    </header>
}