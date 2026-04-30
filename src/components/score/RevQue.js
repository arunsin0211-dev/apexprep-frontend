import { fetchAnsStatus, fetchOneAnswer } from "@/util/clientDataUtil/ResultData"
import { useEffect } from "react";

export default function RevQue({ setCurrQue, totalQuestions}){
        useEffect(() => {
        const questionArr = [];
        for (let i = 1; i <= totalQuestions; i++) {
            questionArr.push(fetchOneAnswer(i));
        }
        console.log(questionArr);
    },[])

    return <div className="w-xs hidden md:block bg-orange-400/20 dark:bg-slate-800 h-180 overflow-y-auto rounded-xl border shadow relative">
        <h2 className="font-bold sticky w-full px-2 py-3 top-0 left-0 z-10 rounded-t-xl bg-orange-500 dark:bg-gray-700 text-3xl mb-4 text-gray-800 dark:text-white "> 
            Questions :
        </h2>

        <div className="flex mt-5 flex-wrap gap-3 justify-around px-2">
            {Array.from({ length: totalQuestions}, (_,idx) => idx+1).map((q,i)=>{
                let fetchedStatus = fetchAnsStatus(i+1);
                const { attempted, correct } = fetchedStatus;
                let color = ` ${attempted ? (correct ? "bg-green-400 border-green-500" : "bg-red-500 border-red-500") : "bg-gray-400/30 border-gray-400 dark:text-slate-200"}`;

                return (<button key={q} onClick={()=>setCurrQue(q)} className={`w-10 h-10 cursor-pointer rounded-lg shadow-xl text border ${color}`}>
                            {i+1}
                </button>)
            })}
        </div>
    </div>
}