'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStudentClick = () => {
    router.push('/student/home');
  };

  const handleParentClick = () => {
    router.push('/parent');
  };

  const handleTeacherClick = () => {
    router.push('/teacher/home');
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to VGA App</h1>
        <p className="text-lg text-gray-600">Choose your role to continue</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={handleStudentClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Student
        </button>
        
        <button 
          onClick={handleParentClick}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Parent
        </button>
        
        <button 
          onClick={handleTeacherClick}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Teacher
        </button>
      </div>
    </div>
  );
}
