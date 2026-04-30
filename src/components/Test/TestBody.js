"use client";

import { useEffect, useRef, useState } from "react";
import QuestionBody from "./QuesBody";
import QuestionArea from "./QuestionArea";
import { addAQuestion } from "../../util/clientDataUtil/QuestionData";
import { useRouter } from "next/navigation";

export default function TestBody({ testDetails, setStatus, answers, setAnswers, handleSubmit }) {

    const [currQue, setCurrQue] = useState(0); // IMPORTANT: keep 0 initially
    const [review, setReview] = useState(new Set());
    const [totalQuestion,setTotalQuestion] = useState(testDetails?.totalQuestions || 0);

    // 🔥 Prevent multiple initial triggers
    const hasStartedRef = useRef(false);
    const router = useRouter();

    useEffect(() => {

        if (!testDetails?.testId) {
            console.warn("❌ Missing testId, SSE not started");
            return;
        }
        setTotalQuestion(testDetails.totalQuestions); // set total questions from details

        const url = `/api/stream/test/${testDetails.testId}`;
        console.log("🚀 Connecting SSE:", url);

        const emitter = new EventSource(url);

        // 🔹 CONNECTION OPEN
        emitter.onopen = () => {
            console.log("✅ SSE connection opened");
        };

        // 🔹 STATUS EVENT
        emitter.addEventListener("status", (event) => {
            console.log("📡 STATUS EVENT:", event.data);
            setStatus(event.data);
        });

        // 🔹 QUESTIONS BATCH EVENT
        emitter.addEventListener("questions-batch", (event) => {
            try {
                const data = JSON.parse(event.data);

                console.log(`📦 Batch received (${data.length} questions)`);

                data.forEach((q) => addAQuestion(q));

                // ✅ Only trigger FIRST TIME
                if (!hasStartedRef.current && data.length > 0) {
                    console.log("🎯 First batch received → starting test");

                    hasStartedRef.current = true;
                    setCurrQue(1);       // start from question 1 ONLY ONCE
                }

            } catch (err) {
                console.error("❌ Failed to parse batch:", err, event.data);
            }
        });

        // 🔹 COMPLETE EVENT
        emitter.addEventListener("complete", () => {
            console.log("✅ All questions received");
            setStatus("READY");
            emitter.close();
        });

        // 🔹 BACKEND ERROR EVENT
        emitter.addEventListener("error", (event) => {
            console.error("❌ Backend error event:", event.data);
            setStatus("FAILED");
            alert("An error occurred while loading the test. Please try again.");
            emitter.close();
            router.push("/exam");
        });

        // 🔹 CONNECTION ERROR
        emitter.onerror = (err) => {
            console.error("🚨 SSE connection error:", err);
            emitter.close();
        };

        // 🔹 CLEANUP
        return () => {
            console.log("🔌 Closing SSE connection");
            emitter.close();
        };

    }, [testDetails]);

    // 🔐 Anti-cheating protections
    useEffect(() => {

        const handleKeyDown = (e) => {
            e.preventDefault();
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                console.warn("⚠️ User switched tab or minimized app");
                alert("Switching tabs is not allowed. This may trigger auto submit.");
                
                // later: increment violation count / auto submit
            }
        };

        const handleFullScreenChange = () => {
            if (!document.fullscreenElement) {
                console.warn("⚠️ User exited fullscreen");
                alert("Exiting full screen may trigger Auto Submit");
            }
        };

        const handleBlur = () => {
            console.warn("⚠️ Window lost focus");
            alert("You left the exam window!");
        };

        const handleResize = () => {
            if (window.innerWidth < screen.width || window.innerHeight < screen.height) {
                console.warn("⚠️ Screen resized / split screen detected");
                alert("Please stay in full screen mode.");
            }
        };

        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        document.addEventListener("fullscreenchange", handleFullScreenChange);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("resize", handleResize);
        window.addEventListener("blur", handleBlur);
        document.addEventListener("copy", handleKeyDown);
        document.addEventListener("paste", handleKeyDown);
        document.addEventListener("cut", handleKeyDown);
        document.addEventListener("selectstart", handleKeyDown);
        document.addEventListener("dragstart", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("fullscreenchange", handleFullScreenChange);
            window.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("blur", handleBlur);
            document.removeEventListener("copy", handleKeyDown);
            document.removeEventListener("paste", handleKeyDown);
            document.removeEventListener("cut", handleKeyDown);
            document.removeEventListener("selectstart", handleKeyDown);
            document.removeEventListener("dragstart", handleKeyDown);
        };

    }, []);

    return (
        <div className="flex px-2 gap-5 no-select">
            <QuestionBody total={totalQuestion} currQue={currQue} setCurrQue={setCurrQue} answers={answers} setAnswers={setAnswers} setReview={setReview}  handleSubmit={handleSubmit} />
            <QuestionArea totalQuestions={totalQuestion} review={review} currQue={currQue} answers={answers} setCurr={setCurrQue} />
        </div>
    );
}