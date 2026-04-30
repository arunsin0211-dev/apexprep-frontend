import { useState } from "react";
import CircularProgress from "./CircularProgress";

export default function ResultBody({testDetails, result, getReview}){

    const attempt = Math.round((result?.attemptedQue / testDetails?.totalQuestions) * 100);
    const accuracy = Math.round((result?.correctQue/ result?.attemptedQue) * 100);
    const timeTakenSec = (testDetails?.durationInMin * 60) - result?.timeLeft;
    const timeTakenMin = timeTakenSec > 0 ? timeTakenSec / 60 : 0.1;
    const userPace = result?.attemptedQue / timeTakenMin;
    const requiredpace = testDetails?.totalQuestions / testDetails?.durationInMin;
    const attemptEff = Math.round((userPace * 100.0  / requiredpace) * 100) / 100;
    const efficiency = Math.min(attemptEff, 100);

    const [laoding,setLoading] = useState(false);

    const loadReview = ()=>{
        setLoading(true);
        getReview();
    }

    return <main className="w-full flex justify-center items-center px-5 py-5">
        <div className="border w-full py-10 px-5 rounded-lg border-gray-700/50 dark:text-slate-200 shadow-xl">
            <h1 className="text-center text-3xl italic font-semibold ">{testDetails?.examName}</h1>
            <hr className="text-gray-400 dark:text-gray-800 my-3"/>
            <div className="w-full py-5 md:px-5 rounded-lg flex flex-wrap gap-5 justify-center md:justify-between md:gap-10 items-center">
                <div className="space-y-5 text-center">
                    <CircularProgress value={result?.score} total={testDetails?.totalMarks} />
                    <p className="text-xl font-bold italic">Score</p>
                </div>
                <div className="w-full flex justify-between gap-5 flex-wrap max-w-5xl py-5 rounded-xl text-lg italic font-semibold">
                    <div className="text-center space-y-1 h-20 min-w-30 border border-indigo-500/70 flex flex-col items-center justify-center px-3 rounded-xl bg-indigo-500/20 ">
                        <h1 className="text-indigo-800 dark:text-indigo-300 text-2xl">{attempt}&nbsp;%</h1>
                        <p className="text-indigo-400">Attempt</p>
                    </div>
                    <div className="text-center space-y-1 h-20 min-w-30 border border-amber-500/70 flex flex-col items-center justify-center px-3 rounded-xl bg-amber-500/20">
                        <h1 className="dark:text-amber-300 text-amber-800 text-2xl">{accuracy}&nbsp;%</h1>
                        <p className="text-amber-600">Accuracy </p>
                    </div>
                    <div className="text-center space-y-1 h-20 min-w-30 border border-emerald-500/70 flex flex-col items-center justify-center px-3 rounded-xl bg-emerald-500/20">
                        <h1 className="text-emerald-900 dark:text-emerald-200 text-2xl">{efficiency}&nbsp;%</h1>
                        <p className="dark:text-emerald-500 text-emerald-700">Efficiency</p>
                    </div>
                    <div className="text-center space-y-1 h-20 min-w-30 border border-rose-500/70 flex flex-col items-center justify-center px-3 rounded-xl bg-rose-500/20">
                        <h1 className="text-rose-900 dark:text-rose-200 text-2xl">{(result?.attemptedQue - result?.correctQue).toString()}</h1>
                        <p className="text-rose-600">Wrong</p>
                    </div>
                    <div className="text-center space-y-1 h-20 min-w-30 border border-slate-500/70 flex flex-col items-center justify-center px-3 rounded-xl bg-slate-500/20">
                        <h1 className="text-slate-900 dark:text-slate-200 text-2xl">{testDetails?.totalQuestions}</h1>
                        <p>Total Question</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center ">
                <button onClick={loadReview} disabled={laoding} className="px-3 rounded-xl py-2 text-xl font-semibold italic bg-orange-400">{laoding ? <div className="w-5 h-5 border-2 border-transparent borter-t-gray-900 animate-spin" /> :"Review Answers"}</button>
            </div>
        </div>
    </main>
}