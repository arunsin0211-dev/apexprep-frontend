import { useState } from "react";
import RevArea from "./ReviewArea";
import RevQue from "./RevQue";

export default function ReviewBody({total, setReview}){

    const[currQue, setCurrQue] = useState(1);

    return <main className="w-full flex justify-center items-center px-5 py-5">
        <div className="w-full flex px-2 gap-5 no-select">
            <RevArea currQue={currQue} setCurrQue={setCurrQue} total={total} setReview={setReview}/>
            <RevQue setCurrQue={setCurrQue} totalQuestions={total} />
        </div>
        
    </main>
}