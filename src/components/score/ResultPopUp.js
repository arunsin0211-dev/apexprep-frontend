import { useState } from "react"

export default function ResultPopUp({loading, setTestId, testId,error, setError}){

    const [inputId, setInputId] = useState(testId || "");
    console.log(error)
    const handleTestIdUpdate =()=>{
        console.log("submitting....");
        setError("");
        setTestId(inputId);
    }

    return <div className="w-full bg-orange-500/10 min-h-screen py-5 px-5 dark:text-slate-300 flex justify-center items-center backdrop-blur-xs fixed z-20 top-0 left-0">
        <div className="border border-gray-400/40 w-full md:max-w-lg p-5 md:p-10 flex justify-center items-center shadow-lg shadow-gray-400/30 rounded-xl space-y-5 bg-lime-400/10 dark:bg-gray-950/30">
            {loading ? <div className="w-12 h-12 border-4 border-transparent border-t-orange-400 dark:border-t-lime-400 rounded-full animate-spin my-16" /> 
            : <div className="space-y-5 w-full mx-auto">
                <div className="space-y-2 w-full ">
                    <label className="text-lg font-semibold italic">Enter your TestId: </label>
                    <input type="text" value={inputId} onChange={(e)=>{setInputId(e.target.value)}} className="w-full max-w-xs border my-2 rounded-lg px-4 py-2 text-lg font-semibold"/>
                </div> 
                <div className="w-full mt-4 mx-auto flex text-xl font-semibold justify-center">
                    <button onClick={handleTestIdUpdate} disabled={inputId.length != 6} className="bg-orange-400 dark:bg-lime-400 text-slate-950 px-4 py-2 disabled:bg-gray-400 disabled:hover:bg-gray-400 hover:bg-orange-600 dark:hover:bg-lime-500 hover:scale-110 rounded-lg ">Submit</button>
                </div>   
                {error && <p className="text-red-600 text-center ">ⓘ &nbsp;{error}</p> }           
            </div>}
        </div>          
    </div>
}