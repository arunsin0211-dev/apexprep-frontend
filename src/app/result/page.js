"use client";

import ResultBody from "@/components/score/ResultBody";
import ResultHeader from "@/components/score/ResultHeader";
import ResultPopUp from "@/components/score/ResultPopUp";
import ReviewBody from "@/components/score/ReviewBody";
import { addReviewedQue } from "@/util/clientDataUtil/ResultData";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ScorePage(){

    const [testId,setTestId] = useState(useSearchParams().get("testId"));
    const [loading,setLoading] = useState(true);
    const [testDetails, setTestDetails] = useState({});
    const [result,setResult] = useState({});
    const [error,setError] = useState("");
    const [review, setReview] = useState(false);
    const revRef = useRef(false);
    const [alreadyFetched, setAlreadyFetched] = useState(false);

    useEffect(()=>{
        console.log(testId);
        if(testId?.length !=6){
            setLoading(false);
            return;
        }
        const fetchResult = async () =>{
            setLoading(true);
            console.log("sending request to backend....")
            await axios.get(`/api/result?testId=${testId}`,{withCredentials:true})
                .then((res) =>{ 
                    console.log(res);
                    setError("");
                    setTestDetails(res.data?.meta);
                    setResult(res.data?.result);
                    setLoading(false);
                })
                .catch((err)=>{
                    console.log(err);
                    const message = err.response?.data?.message || err.message || "An unexpected error occurred";
                    setLoading(false);
                    setError(message);
                })
        }
        fetchResult();
    },[testId,error]);

    const popUp = (testId?.length != 6 || loading || error.length != 0);

    const fetchReview  = useCallback(()=>{
        if(alreadyFetched) return setReview(true); // if already fetched once, just show review without fetching again

        const url = `/api/stream/result/${testId}`;
        console.log("🚀 Connecting SSE:", url);

        const emitter = new EventSource(url);

        emitter.onopen = ()=>{
            console.log("Result SSE connection Opened for testID"+testId);
        }

        emitter.addEventListener("result-batch", (event) =>{          
            try{
                const data = JSON.parse(event.data);
                console.log(`Batch of ${data?.length} for result arrived`);
                addReviewedQue(data);

                if(!revRef.current && data?.length > 0){
                    setReview(true);
                    revRef.current = true;
                }
            }catch(err){
                console.error("Failed to parse review batch", err, event.data);
                emitter.close();
            } 
        });

        emitter.addEventListener("complete", ()=>{
            console.log("Result review SSE completed for testID"+testId);
            setAlreadyFetched(true);
            emitter.close();
        });

        return ()=> {emitter.close();
                console.log("Result review SSE connection closed for testID"+testId);
        }
    },[testId])


    console.log(popUp, testId?.length !=6, loading, error);
    return <main className="w-full min-h-screen flex pt-20 md:pt-25">
        { popUp && <ResultPopUp setTestId={setTestId} loading={loading} error={error} setError={setError} testId={testId}/>}
        <ResultHeader testDetails={testDetails}/>
        {review ? <ReviewBody total={testDetails?.totalQuestions} setReview={setReview} /> :<ResultBody testDetails={testDetails} result={result} getReview={fetchReview}/>}
    </main>
}