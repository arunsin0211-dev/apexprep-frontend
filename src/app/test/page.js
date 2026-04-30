"use client"

import PreTestPopUp from "@/components/Test/PreTestPopUp";
import TestBody from "@/components/Test/TestBody";
import TestHeader from "@/components/Test/TestHeader";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react"

export default function TestPage(){
  const testId  = useSearchParams().get("testId") || null;
  const [testDetails,setTestDetails] = useState(null);
  const[preTest, setPreTest] = useState(true);
  const [status,setStatus] = useState("GENERATING");
  const [answers, setAnswers] = useState({});
  const router = useRouter();
  const [lastClicked,setLastClicked] = useState(0);
  const [secLeft,setSecLeft] = useState(testDetails?.durationInMin ? testDetails.durationInMin * 60 : 0);


  const handleSubmit = async ()=>{
      const now = Date.now();
      // 🚫 Block if within 5 seconds
      if (now - lastClicked < 5000) {
        console.log("Please wait before submitting again");
        return;
      }
      setLastClicked(now);
    
    await axios.post(`/api/test/${testId}/submit`, {answers, secLeft}, {withCredentials : true})
          .then((res)=>{
            console.log(res);
            if(res.status==200){
              router.push(`/result?testId=${testId}`)
            }
          })
          .catch(err => {
            console.log(err);
          })
  };

  useEffect(()=>{
    if(!testId) window.location.href("/exam");   
    const fetchTestDetails = async()=>{
      await axios.get(`/api/test/${testId}`,{withCredentials:true})
              .then((res)=>{
                setTestDetails(res.data);
              })
              .catch(err=>{
                console.log(err);
                router.push("/exam");
              })
    }
    if(!testDetails) fetchTestDetails();
  },[testId])

  
  useEffect(()=>{
    if(secLeft <= 0){
        setSecLeft(testDetails?.durationInMin ? testDetails.durationInMin * 60 : 0);
    }
    if(preTest) return;
    const timer= setInterval(()=>{
        setSecLeft(prev => {
            if(prev <=1 ) {
                clearInterval(timer);
                handleSubmit();
                return 0;
            }
            return prev-1;
        })
    },1000);

    return ()=>clearInterval(timer);
  },[preTest,testDetails])




  return <main className="w-full min-h-screen space-y-5 md:space-y-10" >
    <TestHeader testDetails={testDetails} secLeft={secLeft}/>
    {preTest && <PreTestPopUp status={status} testDetails={testDetails} setPreTest={setPreTest}/>}
    <TestBody setStatus={setStatus} testDetails={testDetails} testId={testId} answers={answers} setAnswers={setAnswers} handleSubmit={handleSubmit}/>
  </main>
}