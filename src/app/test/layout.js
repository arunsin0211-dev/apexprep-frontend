export default function TestLayout({children}){

    return <main className="w-full min-h-screen bg-lime-100 dark:bg-gray-950
        dark:bg-[radial-gradient(circle_at_20%_70%,rgba(32,37,41,0.3)_0%,transparent_40%),radial-gradient(circle_at_80%_15%,rgba(46,40,31,0.3)_0%,transparent_40%),radial-gradient(circle_at_70%_85%,rgba(36,56,41,0.25)_0%,transparent_30%)] 
             bg-[radial-gradient(circle_at_20%_50%,rgba(250,161,18,0.35)_0%,transparent_40%),radial-gradient(circle_at_85%_15%,rgba(223,152,29,0.35)_0%,transparent_40%)]">
        {children}
    </main>
}