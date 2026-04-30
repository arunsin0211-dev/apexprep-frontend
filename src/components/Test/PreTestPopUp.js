
import { useEffect, useState } from "react"

export default function PreTestPopUp({testDetails, status, setPreTest}){
    const [intro,setIntro] = useState(true);
    
    useEffect(()=>{
      if(status == "READY" && !intro){
        setPreTest(false);
      }
    },[intro,status])
    
    
  return <main className="fixed w-full p-2 md:p-8 min-h-screen z-20 backdrop-blur-sm top-0 left-0 flex justify-center items-center bg-orange-400/20 dark:bg-gray-700/40">
    <div className="w-full backdrop-blur-xl max-w-2xl p-4 md:p-8 rounded-xl border-2 md:border-3 shadow-lg bg-orange-300/30 dark:bg-slate-700/30 border-orange-400 dark:border-slate-400 shadow-gray-500/50">
      {intro ? <TermsComp setIntro={setIntro} testDetails={testDetails} /> :<JobStatusLoader status={status}/>}
    </div>
  </main>
}



const TermsComp=({setIntro,testDetails})=>{
  const [loading,setLoading] = useState(!testDetails?.testId);

  const terms = [
    "Please remain within the active window and avoid switching tabs.",
    "This test is designed to be taken in full-screen mode. Don't exit Full-Screen",
    "Leaving the test window will result in an immediate submission.",
    "Right-click and copy/paste functions are disabled for this session.",
    "Test will auto-submit the moment time runs out."
  ];
  const handleAgreement =()=>{
    // document.fullscreenElement.
    // go full screen when button in clicked and 
    const ele = document.documentElement;
    if(ele.requestFullscreen){
      ele.requestFullscreen().catch(err=>{});
    }
    setIntro(false);
  }
  useEffect(()=>{
    setLoading(!testDetails?.testId);
  },[testDetails])

  if(loading) return <div className="text-slate-900 dark:text-gray-300">
        <h1 className="text-3xl tracking-wider font-semibold" >Loading . . .</h1>
  </div>


return <div className=" text-slate-900 dark:text-gray-300">
    <h1 className="text-3xl text-center font-semibold text-slate-950 dark:text-slate-100 mb-4">Instructions :</h1>
    {Array.from(terms).map((term,idx)=>(
      <p key={idx} className={`mb-1 ${idx == 1 ? "hidden md:inline" :""}`}><span className="mr-2 ">✔</span>{term}</p>
    ))}
    <div className="flex my-4 justify-between items-center">
      <div className="space-y-2">
        <h1 className="">Questions:<span className="md:text-xl font-semibold">&nbsp;&nbsp;{testDetails?.totalQuestions}</span></h1>
        <h1 className="">Time: <span className="md:text-xl font-semibold">&nbsp;&nbsp;{testDetails?.durationInMin} min.</span></h1>
      </div>
      <div className="space-y-2">
        <h1 className="text-green-700 dark:text-green-500">Correct:<span className="text-xl md:font-semibold">&nbsp;&nbsp;+{testDetails?.correctMarks}</span></h1>
        <h1 className="text-red-500">Negative:<span className="text-xl md:font-semibold">&nbsp;&nbsp;-{testDetails?.negativeMark}</span></h1>
      </div>
    </div>
    <div className="w-full mt-4 md:mt-8 flex justify-center items-center">
      <button onClick={handleAgreement} className="rounded-lg font-ubuntu px-4 py-1 text-slate-950 shadow-lg shadow-gray-500 bg-orange-400 hover:bg-orange-500 dark:bg-lime-400 dark:hover:bg-lime-500 md:text-lg md:font-semibold">I &nbsp; Agree</button>
    </div>
  </div>

}

export const JobStatusLoader =({status})=>{

  return <div className="w-full py-30 text-center space-y-5">
          {/* Spinner */}
      <div className="w-12 h-12 mx-auto mb-16 border-5 border-transparent border-t-cyan-600 dark:border-t-lime-400 rounded-full animate-spin" />

    <div className="text-3xl dark:text-slate-200">
      {status}
    </div>
  </div>
}