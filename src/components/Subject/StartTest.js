import { useCallback, useEffect, useState } from "react";
import { icons } from "./Exams";
import axios from "axios";

export default function StartTest({examId}){
    
    const [exam,setExam] = useState({});
    const [loading,setLoading] = useState(true);
    const [fullTest,setFullTest] = useState(true);
    const [selectedSubject,setSelectedSubject] = useState({});
    const [difficulty,setDifficulty] = useState("Medium");

    const handleStartTest = useCallback(async(e)=>{
        e.preventDefault();
        var subjectId = fullTest ? null : selectedSubject?.id;
        var testBody ={examId,subjectId,difficulty:difficulty.toUpperCase()}
        axios.post("/api/startest",testBody)
            .then(res => {
               const testId =  res.data?.testId;
               window.localStorage.setItem("testId",testId);
               window.location.href="/test?testId="+testId;
            })
            .catch(err =>{
                console.log(err);
                alert("Failed to create Test. Please try again.");
            })
    },[examId,selectedSubject,difficulty]);

    useEffect(()=>{
        if(!examId){
            alert("examId is empty...."+examId)
            window.location.href = "/exam";
            return;
        }
        setLoading(true);
        console.log(examId);
        // fetch test details using examId and then redirect to test page
        fetch('/api/exam?examId='+examId)
        .then(res => res.json())
        .then(data => {
            setExam(data);
            setSelectedSubject(data.subjectsName?.[0] || {});
            setLoading(false);})
        .catch(err => {
            console.error(err);
            alert("Failed to load exam details. Please try again later.");
            setLoading(false);
            window.location.href = "/exam";
        });
    },[examId]);

    const DifficultyBtn = ({ level }) => (
        <button onClick={() => setDifficulty(level)}
            className={`px-6 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${
                difficulty === level ? "bg-orange-500 border-orange-500 text-slate-50 shadow-lg shadow-orange-500/40 dark:bg-lime-400 dark:border-lime-400 dark:text-gray-900 dark:shadow-green-400/30"
                : "bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-orange-400"
            }`} >
            {level}
        </button>
    );



    return <main className="py-6 md:py-12 px-4 relative">
        <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <a href="/exam" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-orange-900 dark:hover:text-gray-300 transition-colors mb-8 group">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Exam Selection
            </a>
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-12 bg-orange-300/20 dark:bg-emerald-950/60 p-2 md:p-4 lg:px-8 md:gap-5 rounded-2xl md:rounded-3xl border border-orange-200 dark:border-gray-800 shadow-lg dark:shadow-green-600/20">
                <div className={`w-12 h-12 md:w-20 md:h-20 shrink-0 flex items-center justify-center text-3xl md:text-5xl rounded-xl bg-gradient-to-br shadow-inner ${exam.color || 'from-orange-400 to-orange-600'}`}>
                    {icons[exam.iconIdx]}
                </div>
                <div className="text-start md:space-y-1">
                    <h1 className="text-2xl md:text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{exam.name}</h1>
                    <p className="ml-1 text-sm md:text-lg text-gray-500 dark:text-gray-400">{exam.fullName}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Customization Column */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                            <span className="w-2 h-6 bg-orange-500 dark:bg-lime-400 rounded-full"></span>
                            1. Select Test Type
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => setFullTest(true)} className={`p-2 md:p-4 rounded-xl border-2 text-left transition-all ${fullTest ? "border-orange-500 shadow-lg dark:border-lime-400/70 bg-gray-100/20 dark:bg-lime-300/10" : "border-gray-100 dark:border-gray-800 bg-slate-300/30 dark:bg-slate-800/40"}`}>
                                <div className={`font-bold ${fullTest ? "text-orange-600 dark:text-lime-400" : "text-gray-700 dark:text-gray-300"}`}>Full Mock Test</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300 mt-1">All Topics Test</div>
                            </button>
                            <button onClick={() => setFullTest(false)} className={`p-2 md:p-4 rounded-xl border-2 text-left transition-all ${!fullTest ? "border-orange-500 shadow-lg dark:border-lime-400/70 bg-gray-100/20 dark:bg-lime-300/10" : "border-gray-100 dark:border-gray-800 bg-slate-300/30 dark:bg-slate-800/40"}`}>
                                <div className={`font-bold ${!fullTest ? "text-orange-600 dark:text-lime-400" : "text-gray-700 dark:text-gray-300"}`}>Subject Wise</div>
                                <div className="text-xs text-gray-700 dark:text-gray-300 mt-1">Subject Specific Test</div>
                            </button>
                        </div>
                    </section>
                    {!fullTest && (
                        <section className="animate-in fade-in slide-in-from-top-4 duration-300">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-4">2. Choose Subject</h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {exam.subjectsName?.map((sub) => (
                                    <button key={sub.id} onClick={() => setSelectedSubject(sub)} className={`px-4 py-2 rounded-lg text-sm transition-all ${selectedSubject === sub ? "bg-orange-500 text-slate-50 dark:bg-lime-400 dark:text-gray-900 font-semibold" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"}`}>
                                        {sub.name}
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}
                    <section>
                        <h2 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-4">{fullTest ? 2 : 3}. Difficulty Level</h2>
                        <div className="flex gap-4">
                            <DifficultyBtn level="Easy" />
                            <DifficultyBtn level="Medium" />
                            <DifficultyBtn level="Hard" />
                        </div>
                    </section>
                </div>
                {/* Summary Column */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 bg-slate-200/40 dark:bg-slate-800/40 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
                        <h3 className="text-lg font-bold dark:text-white mb-6">Test Summary</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Mode</span>
                                <span className="font-semibold dark:text-gray-200">{fullTest ? "Full Exam" : "Practice"}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Duration</span>
                                <span className="font-semibold dark:text-gray-200">{exam.duration} Minutes</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Questions</span>
                                <span className="font-semibold dark:text-gray-200">{exam.totalQuestions} MCQs</span>
                            </div>
                            <hr className="border-gray-400 dark:border-gray-600" />
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="text-center p-3 rounded-xl bg-green-500/20">
                                    <div className="text-xs text-green-600 uppercase font-bold">Correct</div>
                                    <div className="text-lg font-bold text-green-700 dark:text-green-400">+{exam.correctMarks}</div>
                                </div>
                                <div className="text-center p-3 rounded-xl bg-red-500/20">
                                    <div className="text-xs text-red-600/80  uppercase font-bold">Negative</div>
                                    <div className="text-lg font-bold text-red-600 ">-{exam.negativeMarks}</div>
                                </div>
                            </div>
                        </div>
                        <button disabled={examId == null} onClick={handleStartTest} className="w-full cursor-pointer py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 dark:from-lime-400 dark:to-lime-500 dark:hover:from-lime-500 disabled:from-gray-500 disabled:to-gray-600 disabled:hover:from-gray-500 disabled:hover:to-gray-600 dark:hover:to-lime-600 text-slate-100 dark:text-slate-900 font-bold rounded-2xl shadow-lg shadow-orange-500/30 dark:shadow-lime-500/30 disabled:shadow-gray-600/40 transition-all transform active:scale-[0.98]">
                            Start Test
                        </button>
                        <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">Powered by ApexPrep AI</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
}