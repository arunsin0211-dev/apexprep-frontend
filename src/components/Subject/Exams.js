import { useEffect, useState } from "react"
import { motion } from "framer-motion";
export const icons =["🏛️","📚","⚙️","💻","🏗️","🏦","🧪","🌐","🏫"]
export default function ExamTest(){

    const [exams,setExam] = useState([]);
    
    useEffect(()=>{
        if(exams.length == 0){
            fetch('/api/exam')
                .then((res)=>(res.json()))
                .then((data)=>{setExam(data)})
                .catch((ex)=>console.log(ex));
        }
    },[])

    return <div className="flex justify-between space-y-4 flex-wrap">
                {exams && exams.map((exam,index)=>(<motion.a href={`/exam?examId=${exam?.id}`} whileHover={{scale:1.03,translateY:-5}} key={index} className="cursor-pointer rounded-3xl max-w-lg py-5 px-3 md:px-4 hover:shadow-2xl shadow-orange-400/70 dark:shadow-lime-400/50 bg-[#173b1d]/5 dark:bg-[#173b1d]/40 backdrop-blur-[20px] gradient-border cursor-pointer group">
                    <div className="flex items-start gap-6">
                        <div className={`w-15 h-15 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                            {icons[exam.iconIdx]}
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-bold mb-2 dark:text-gray-300">{exam.name}</h2>
                            <p className="dark:text-gray-300 text-gray-800 text-sm mb-4">{exam.fullName}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between items-center text-md ">
                            <div className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                </svg>
                                <span className="font-semibold text-gray-900 dark:text-gray-300">{exam.totalQuestions} Questions</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="font-semibold text-gray-900 dark:text-gray-300">{exam.duration} min</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="font-semibold text-gray-900 dark:text-gray-300">{exam.totalMarks} Marks</span>
                            </div>
                        </div>
                        <div className="flex max-w-sm px-1 gap-2 mt-4 items-center text-md flex-wrap">
                            {exam.subjectsName.slice(0, 3).map((s,idx) => (
                                <span key={idx} className="px-2 py-1 rounded-lg bg-orange-400/10 dark:bg-lime-500/10 dark:text-lime-500 text-orange-600 text-xs">{s.name}</span>
                            ))}
                            {exam.subjectsName?.length > 3 ? (<span className="px-2 py-1 rounded-lg bg-gray-700/35 dark:text-gray-300 text-gray-800 text-xs">+{exam.subjectsName.length - 3} more</span>) : ''}
                        </div>
                    </div>
                </motion.a>))}
            </div>
}