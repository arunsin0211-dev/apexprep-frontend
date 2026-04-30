"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
    
  const [mode,setMode]= useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  }
  useEffect(() => {
    document.body.classList.add(mode);
    return () => {
      document.body.classList.remove(mode);
    }
  }, [mode])

    return <>
        {children}
        <button onClick={toggleMode} className="fixed z-40 bottom-5 bg-slate-300/30 dark:bg-none right-5 p-3 rounded-full backdrop-blur shadow-xl border border-gray-400/40 dark:text-slate-100">
          {mode === "light" ? <Moon /> : <Sun />}
        </button>
    </>
}