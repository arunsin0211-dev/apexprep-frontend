"use client";

import axios from "axios";

const QuestionData = {};

export const addQuestions =(questions)=>{
    Array.from(questions).forEach(que=>{
        QuestionData[que?.queNumber || 0] = que;
    })
}

export const addAQuestion = (que) =>{
    QuestionData[que?.queNumber || 0] = que;
}

export const fetchQuestion = (queNum) =>{
    return QuestionData[queNum] || {...que,questionNumber:queNum};
}
 
export const fetchAllQuestions = async(totalQuestions,testId)=>{
    let i = 1;
    const numSet = Math.floor(totalQuestions / 10);
    while(i <= numSet){
        await axios.get(`/api/questions?set=${i}&testId=${testId}`)
            .then(res=>{
                addQuestions(res.data);
            }).catch(err =>{
                console.log(err);
            });
            
        i++;
    }
}

const que ={
    question : "Consider the following statements regarding Indian Constitution...",
    optionA: "Statement 1 is correct",
    optionB: "Statement 2 is correct",
    optionC: "Both",
    optionD: "Neither"
}
