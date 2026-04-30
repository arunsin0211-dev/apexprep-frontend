"use client";

const RESULT_DATA = {};

export const addReviewedQue = (revList) =>{
    Array.from(revList).forEach(rev =>{
        RESULT_DATA[rev?.questionNumber || 0] = rev; 
    })
}

export const addAReviewQue = (rev) =>{
    RESULT_DATA[rev?.questionNumber || 0] =rev;
}

export const fetchOneAnswer = (queNum)=>{
    return RESULT_DATA[queNum] || {...rev, "questionNumber" : queNum}
}

export const fetchAnsStatus = (queNum) =>{
    let que = RESULT_DATA[queNum] || rev;
    let attempted = que?.userAnswer != ' ';
    let correct = que?.userAnswer == que?.correctOption;
    return {attempted, correct };
}

const rev = {
    "question" : "Consider the following statements regarding Indian Constitution...",
    "optionA" : "Statement 1 is correct",
    "optionB" : "Statement 2 is correct",
    "optionC" : "Both",
    "optionD" : "None",
    "userAnswer" : ' ',
    "correctOption" : 'Z',
    "explanation" : ""
}