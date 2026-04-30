import { useEffect, useState } from "react";
import { fetchQuestion } from "../../util/clientDataUtil/QuestionData"

export default function QuestionBody({currQue, total,setCurrQue,answers,setAnswers,setReview, handleSubmit}){
    const [question,setQuestion] = useState(fetchQuestion(currQue));
    const [currAns,setCurrAns] = useState(answers[currQue] || null);
    
    const updateAns= async (option) =>{
        setAnswers(prev => ({...prev,[currQue]:option}));
        // send answer for each question on backend;
        // and also cache on frontend
        setCurrQue(prev => prev+1);
    }
    useEffect(()=>{
        setQuestion(fetchQuestion(currQue));
    },[currQue])

    useEffect(()=>{
        setCurrAns(answers[currQue] || null);
    },[answers,currQue]);
    
    const prevQue = ()=>{
        setCurrQue(prev => Math.max(prev-1, 1));
    }
    
    const toggleReview = ()=>{
        setReview(prev => {
            const prevSet = new Set(prev);
            if(prevSet.has(currQue)){
                prevSet.delete(currQue);
            }else{prevSet.add(currQue);}
            
            return prevSet;
        })
    }
    const nextQue =()=>{
        
        setCurrQue(prev => Math.min(prev+1,total));
    }

    return <div className="flex-1 bg-orange-400/20 dark:bg-slate-800 p-6 rounded-xl border shadow">
        <h2 className="font-bold text-3xl mb-4 text-gray-800 dark:text-white"> 
            Question {question.queNumber} :
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 font-semibold text-2xl" dangerouslySetInnerHTML={{ __html: question?.question }} />
        <div className="space-y-5">
            <button onClick={()=>updateAns("A")} className={`w-full cursor-pointer text-left text-lg dark:text-slate-200 px-4 py-3 rounded-lg border transition ${currAns === "A" ? "bg-green-500 text-white border-green-500" : "bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"}`}>
                <span className="text-xl font-semibold"> Option A : &nbsp; </span> <span dangerouslySetInnerHTML={{ __html: question?.optionA }} /></button>
            <button onClick={()=>updateAns("B")} className={`w-full cursor-pointer text-left text-lg dark:text-slate-200 px-4 py-3 rounded-lg border transition ${currAns === "B" ? "bg-green-500 text-white border-green-500" : "bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"}`}>
                <span className="text-xl font-semibold"> Option B : &nbsp; </span> <span dangerouslySetInnerHTML={{ __html: question?.optionB }} /></button>
            <button onClick={()=>updateAns("C")} className={`w-full cursor-pointer text-left text-lg dark:text-slate-200 px-4 py-3 rounded-lg border transition ${currAns === "C" ? "bg-green-500 text-white border-green-500" : "bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"}`}>
                <span className="text-xl font-semibold"> Option C : &nbsp; </span> <span dangerouslySetInnerHTML={{ __html: question?.optionC }} /></button>
            <button onClick={()=>updateAns("D")} className={`w-full cursor-pointer text-left text-lg dark:text-slate-200 px-4 py-3 rounded-lg border transition ${currAns === "D" ? "bg-green-500 text-white border-green-500" : "bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"}`}>
                <span className="text-xl font-semibold"> Option D : &nbsp; </span> <span dangerouslySetInnerHTML={{ __html: question?.optionD }} /></button>
        </div>


        {/* ACTION BUTTONS */}

        <div className="flex justify-between mt-6 w-full ">
            <button onClick={prevQue} disabled={currQue === 1} className="px-4 py-2 bg-gray-300 rounded" >Previous</button>
            <button onClick={toggleReview} className="px-4 py-2 bg-blue-500 text-white rounded"> 
                Mark for Review
            </button>
            <button onClick={nextQue} disabled={currQue === total} className="px-4 py-2 font-semibold bg-orange-500 dark:bg-lime-400 dark:text-gray-900 text-white rounded" >Next</button>
        </div>

        <div className="w-full mt-5 items-center flex justify-center item">
            <button onClick={handleSubmit} className="px-3 py-1 duration-200 transition-all hover:scale-1.2 text-xl bg-orange-400 dark:bg-lime-400 rounded cursor-pointer" >Submit Test</button>
        </div>
    </div>
}