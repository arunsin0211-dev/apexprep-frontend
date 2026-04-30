export default function ExamLayout({children}){

    return <main className="w-full min-h-screen bg-[#e2ffde]/70 dark:bg-[#03100F] 
        dark:bg-[radial-gradient(circle_at_20%_70%,rgba(87,131,17,0.3)_0%,transparent_40%),radial-gradient(circle_at_80%_15%,rgba(32,72,23,0.3)_0%,transparent_40%),radial-gradient(circle_at_70%_85%,rgba(160,213,133,0.25)_0%,transparent_30%)] 
             bg-[radial-gradient(circle_at_20%_50%,rgba(250,161,18,0.35)_0%,transparent_40%),radial-gradient(circle_at_85%_15%,rgba(223,152,29,0.35)_0%,transparent_40%)]">
        {children}
    </main>
}