export default function QuestionArea({totalQuestions,review,answers,setCurr}){

    return <div className="w-xs hidden md:block bg-orange-400/20 dark:bg-slate-800 h-180 overflow-y-auto rounded-xl border shadow relative">
        <h2 className="font-bold sticky w-full px-2 py-3 top-0 left-0 z-10 rounded-t-xl bg-orange-500 dark:bg-gray-700 text-3xl mb-4 text-gray-800 dark:text-white "> 
            Questions :
        </h2>

        <div className="flex mt-5 flex-wrap gap-3 justify-around px-2">
            {Array.from({ length: totalQuestions}, (_,idx) => idx+1).map((q,i)=>{
                let color="bg-white border";
                if(review.has(q)) color="bg-blue-500 text-white"
                else if(answers[q]) color="bg-green-500 text-white"

                return (<button key={q} onClick={()=>setCurr(q)} className={`w-10 h-10 cursor-pointer rounded-lg shadow-xl text border ${color}`}>
                            {i+1}
                </button>)
            })}
        </div>
    </div>
}