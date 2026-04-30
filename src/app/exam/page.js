"use client"


import ExamTest from "@/components/Subject/Exams";
import { useSearchParams } from "next/navigation";
import StartTest from "@/components/Subject/StartTest";
import { Suspense } from "react";
import { JobStatusLoader } from "@/components/Test/PreTestPopUp";

 function ExamComponent(){
    const examPair = {
            upsc_cse: "1e403b3e-f718-4e3c-8fb2-e84a388ef8ad",
            ssc_cgl: "27e55657-efd9-4a30-9b9a-57540de4ccc9",
            banking: "89961798-fde9-43c5-8cf0-0ccba2cbcc1a"
    };

    const examName = useSearchParams().get('exam');

    const examId = useSearchParams().get('examId') || examPair[examName?.toLowerCase()] || null;

    return examId ? <StartTest examId ={examId} /> : <main className="w-full px-3 py-6 md:px-6 relative ">
        <div className="rounded-xl ">
            <a href="/" className="flex max-w-7xl mx-auto gap-2 items-center dark:text-gray-300 dark:hover:text-gray-100 text-gray-800 hover:text-gray-950 transition-colors mb-6   ">  
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg> 
                Back to Home
            </a>
            <div className="mb-8 text-center">
                <h1 className="font-display text-gray-800 dark:text-gray-300 text-4xl md:text-5xl font-bold mb-2">
                    Select Your
                    <span className="bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#10b981] dark:to-[#a5b4fc] bg-clip-text text-transparent">
                        &nbsp; Exam
                    </span>
                </h1>
                <p className="text-gray-600 text-lg dark:text-gray-400 max-w-3xl mx-auto">Choose from a wide range of exams and start your personalized preparation journey with ApexPrep AI.</p>
            </div>
             <ExamTest />

        </div>
        </main>
}

export default function ExamPage(){
    return <Suspense fallback={JobStatusLoader({status:"loading"})}>
        <ExamComponent />
    </Suspense>
}
