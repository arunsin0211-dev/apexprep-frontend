export default function ResultHeader({testDetails}){


    return <header className="px-2 py-2 fixed top-0 z-20 py-2 md:px-7 w-full dark:text-slate-100">
        <div className="w-full backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 rounded-2xl py-3 px-2 md:px-5 flex justify-between items-center border border-gray-400/30 shadow-xl shadow-gray-400/30">
            <div>
                <a href="/"><img src="/brandName_Dark.png" alt="ApexPrepAI" className="hidden dark:inline md:w-70 w-40" /></a>
                <a href="/"><img src="/brandName_Light.png" alt="ApexPrepAI" className="dark:hidden md:w-70 w-40" /></a>
            </div>
            <h1 className="text-2xl font-semibold italic hidden md:inline">
                {testDetails?.examName} &nbsp; {testDetails?.subjectName && `: ${testDetails?.subjectName}`}
            </h1>
            <div className="md:text-2xl font-semibold font-ubuntu italic">
                <h3>Test Id: &nbsp; {testDetails?.testId}</h3>
            </div>
        </div>
    </header>
}