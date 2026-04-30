"use client";

import About from "@/components/Home/About";
import Analytics from "@/components/Home/Analytics";
import Details from "@/components/Home/Details";
import Exams from "@/components/Home/Exams";
import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import NavBar from "@/components/Home/NavBar";
import { useState } from "react";

export default function Home() {
  const [exam,setExam] = useState("")



  return <main className={`w-full relative`}>
    
    <NavBar />
    <Hero />
    <About />
    <Features />
    <Exams />
    <Analytics />
    <Details />
    <Footer />
  </main>
}