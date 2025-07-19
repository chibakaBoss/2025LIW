'use client'; // client-side component гэдгийг заана

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function IntroScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 text-white px-6 py-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Welcome to my Website
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          If you would like to see my information, please click the <i><b>Continue</b></i> button.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => router.push('/info')}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-full shadow-md transition-all"
          >
            Continue
          </button>
          <button
            onClick={() => router.push('/bye')}
            className="px-6 py-3 border border-purple-500 text-purple-300 hover:bg-zinc-800 text-lg font-medium rounded-full transition-all rounded-full"
          >
            No thanks
          </button>
        </div>
      </motion.div>
    </div>
  );
}
