import { fetchOneAnswer } from "@/util/clientDataUtil/ResultData"


export default function ReviewArea({ currQue, setCurrQue, total, setReview}) {
    const question = fetchOneAnswer(currQue);

    // Helper to determine styles for each option
    const getOptionStyle = (optionLetter) => {
        const isCorrect = question.correctOption === optionLetter;
        const isUserChoice = question.userAnswer?.trim() === optionLetter;

        // Base styles
        let styles = "border-gray-300 dark:border-slate-600"; 

        if (isCorrect) {
            // Correct option is always green
            styles = "border-green-500 bg-green-100 dark:bg-green-900/30 ring-2 ring-green-500";
        } else if (isUserChoice && !isCorrect) {
            // User chose this, but it's wrong
            styles = "border-red-500 bg-red-100 dark:bg-red-900/30 ring-2 ring-red-500";
        }

        return styles;
    };



    if (!question) return <div className="p-6">Loading...</div>;

    return (
        <div className="flex-1 bg-orange-400/20 dark:bg-slate-800 p-6 rounded-xl border shadow overflow-y-auto">
            <h2 className="font-bold text-3xl mb-4 text-gray-800 dark:text-white">
                Question {question.questionNumber} :
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300 font-semibold text-2xl" dangerouslySetInnerHTML={{ __html: question?.question }}/>

            <div className="space-y-5">
                {['A', 'B', 'C', 'D'].map((letter) => (
                    <div
                        key={letter}
                        className={`w-full text-left text-lg dark:text-slate-200 px-4 py-3 rounded-lg border transition shadow-sm ${getOptionStyle(letter)}`}
                    >
                        <span className="text-xl font-semibold">Option {letter} : &nbsp;</span>
                        <span dangerouslySetInnerHTML={{ __html: question[`option${letter}`] }} />
                    </div>
                ))}
            </div>

            <h2 className="font-bold mt-8 text-3xl mb-4 text-gray-800 dark:text-white border-t pt-4">
                Explanation :
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg" dangerouslySetInnerHTML={{ __html: question.explanation }} />

            <div className="flex justify-between mt-6 w-full ">
                <button onClick={() => setCurrQue(prev => prev - 1)} disabled={currQue === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" >Previous</button>
                <button onClick={() => setReview(false)} className="cursor-pointer px-4 py-2 bg-orange-500 dark:bg-lime-500 rounded disabled:opacity-50" >Go to Score</button>
                <button onClick={() => setCurrQue(prev => prev + 1)} disabled={currQue === total} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Next</button>
            </div>
        </div>
    );
}