"use client"

import { useEffect, useState } from "react"

/* ---------------- DEMO QUESTIONS ---------------- */

const QuestionData = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  text: `UPSC Question #${i + 1}: Consider the following statements regarding Indian Constitution...`,
  options: {
    A: "Statement 1 is correct",
    B: "Statement 2 is correct",
    C: "Both",
    D: "Neither"
  },
  answer: "C"
}))


export default function TestPage(){

/* ---------------- STATE ---------------- */

const [current,setCurrent] = useState(0)
const [answers,setAnswers] = useState({})
const [review,setReview] = useState(new Set())
const [time,setTime] = useState(60*60) // 60 min
const [submitted,setSubmitted] = useState(false)

/* ---------------- TIMER ---------------- */

useEffect(()=>{

const timer = setInterval(()=>{

setTime(t=>{

if(t<=1){
submitTest()
clearInterval(timer)
return 0
}

return t-1
})

},1000)

return ()=>clearInterval(timer)

},[])


const formatTime=(sec)=>{

const m=Math.floor(sec/60)
const s=sec%60
return `${m}:${s.toString().padStart(2,"0")}`

}

/* ---------------- OPTION SELECT ---------------- */

const selectOption=(option)=>{

setAnswers(prev=>({
...prev,
[current]:option
}))

}

/* ---------------- REVIEW ---------------- */

const toggleReview=()=>{

const newSet=new Set(review)

if(newSet.has(current))
newSet.delete(current)
else
newSet.add(current)

setReview(newSet)

}

/* ---------------- NAVIGATION ---------------- */

const next=()=>{

if(current<QuestionData.length-1)
setCurrent(current+1)

}

const prev=()=>{

if(current>0)
setCurrent(current-1)

}

/* ---------------- SUBMIT ---------------- */

const submitTest=()=>{

if(submitted) return

setSubmitted(true)

alert("Test Submitted!")

console.log("Answers:",answers)

}

/* ---------------- SECURITY ---------------- */

useEffect(()=>{

/* fullscreen */

document.documentElement.requestFullscreen().catch(()=>{})

/* exit fullscreen */

const fullscreenHandler=()=>{

if(!document.fullscreenElement){

alert("Fullscreen exited. Test auto submitted.")
submitTest()

}

}

document.addEventListener("fullscreenchange",fullscreenHandler)

/* tab switch */

const visibilityHandler=()=>{

if(document.hidden){

alert("Tab switch detected. Test auto submitted.")
submitTest()

}

}

document.addEventListener("visibilitychange",visibilityHandler)

/* disable right click */

const rightClick=e=>e.preventDefault()
document.addEventListener("contextmenu",rightClick)

/* disable inspect */

const keyHandler=e=>{

if(
e.ctrlKey &&
(e.key==="u"||e.key==="c"||e.key==="i")
){
e.preventDefault()
}

}

document.addEventListener("keydown",keyHandler)

return ()=>{

document.removeEventListener("fullscreenchange",fullscreenHandler)
document.removeEventListener("visibilitychange",visibilityHandler)
document.removeEventListener("contextmenu",rightClick)
document.removeEventListener("keydown",keyHandler)

}

},[])

/* ---------------- QUESTION ---------------- */

const question=QuestionData[current]

/* ---------------- UI ---------------- */

return(

<div className="w-full min-h-screen bg-gray-100 dark:bg-slate-900 p-4">

{/* HEADER */}

<div className="flex justify-between items-center mb-6">

<h1 className="text-xl font-bold text-gray-800 dark:text-white">
ApexPrep AI Mock Test
</h1>

<div className="text-lg font-bold text-red-500">
⏱ {formatTime(time)}
</div>

<button
onClick={submitTest}
className="bg-red-500 text-white px-4 py-2 rounded-lg"
>
Submit
</button>

</div>


<div className="grid grid-cols-4 gap-6">

{/* LEFT SECTION */}

<div className="col-span-3 bg-white dark:bg-slate-800 p-6 rounded-xl shadow">

<h2 className="font-bold mb-4 text-gray-800 dark:text-white">
Question {current+1}
</h2>

<p className="mb-6 text-gray-700 dark:text-gray-300">
{question.text}
</p>


<div className="space-y-3">

{Object.entries(question.options).map(([key,val])=>{

const selected=answers[current]===key

return(

<button
key={key}
onClick={()=>selectOption(key)}
className={`w-full text-left px-4 py-3 rounded-lg border transition
${selected
? "bg-green-500 text-white border-green-500"
: "bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"
}`}
>

{key}. {val}

</button>

)

})}

</div>


{/* ACTION BUTTONS */}

<div className="flex justify-between mt-6">

<button
onClick={prev}
className="px-4 py-2 bg-gray-300 rounded"
>
Previous
</button>

<button
onClick={toggleReview}
className="px-4 py-2 bg-blue-500 text-white rounded"
>
Mark for Review
</button>

<button
onClick={next}
className="px-4 py-2 bg-orange-500 text-white rounded"
>
Next
</button>

</div>

</div>


{/* RIGHT PANEL */}

<div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow sticky top-4 h-fit">

<h3 className="font-bold mb-4 text-gray-800 dark:text-white">
Questions
</h3>

<div className="grid grid-cols-5 gap-2">

{QuestionData.map((q,i)=>{

let color="bg-white border"

if(review.has(i))
color="bg-blue-500 text-white"

else if(answers[i])
color="bg-green-500 text-white"

return(

<button
key={i}
onClick={()=>setCurrent(i)}
className={`w-10 h-10 rounded text-sm border ${color}`}
>
{i+1}
</button>

)

})}

</div>


{/* LEGEND */}

<div className="mt-6 text-xs space-y-1">

<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-green-500"></div>
Attempted
</div>

<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white border"></div>
Not Attempted
</div>

<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-blue-500"></div>
Review
</div>

</div>

</div>

</div>

</div>

)

}