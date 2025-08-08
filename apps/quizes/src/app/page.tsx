import Image from "next/image";

export default function QuizesHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Quizes
          </h1>
        </div>

        <div className="text-center mt-16">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js 15 + Turborepo ⚡
          </div>
        </div>
      </div>
    </div>
  );
}
