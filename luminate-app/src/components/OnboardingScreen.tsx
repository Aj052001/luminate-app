// import React, { useState } from 'react';
// import { 
//   ChevronRight, 
//   ChevronLeft, 
//   Sparkles 
// } from 'lucide-react';

// const OnboardingScreen = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});

//   const questions = [
//     {
//       id: 1,
//       question: "What is your experience level with psychedelics?",
//       options: ["First time", "Some experience", "Experienced", "Very experienced"]
//     },
//     {
//       id: 2,
//       question: "What is your primary intention for this journey?",
//       options: ["Healing", "Self-discovery", "Spiritual growth", "Therapeutic"]
//     },
//     {
//       id: 3,
//       question: "Do you have a trip sitter present?",
//       options: ["Yes", "No"]
//     },
//     {
//       id: 4,
//       question: "How would you describe your current mindset?",
//       options: ["Calm", "Anxious", "Excited", "Uncertain"]
//     },
//     {
//       id: 5,
//       question: "What is your preferred setting?",
//       options: ["Indoor", "Nature", "Mixed"]
//     },
//     {
//       id: 6,
//       question: "Have you set aside adequate time for integration?",
//       options: ["Yes", "No", "Not sure"]
//     }
//   ];

//   const handleAnswer = (answer) => {
//     setAnswers({ ...answers, [currentQuestion]: answer });
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const progress = ((currentQuestion + 1) / questions.length) * 100;
  
//   // Check if all questions have been answered
//   const isComplete = Object.keys(answers).length === questions.length;

//   const handleContinue = () => {
//     // Add your navigation logic here
//     console.log('Navigate to journal page');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-4 flex flex-col items-center">
//       {/* Header with icon */}
//       <div className="w-full max-w-md flex items-center gap-2 mb-6">
//         <Sparkles className="w-5 h-5 text-purple-400" />
//         <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
//           Getting Started
//         </h1>
//       </div>

//       {/* Progress bar */}
//       <div className="w-full max-w-md mb-6">
//         <div className="text-sm text-purple-400 mb-2 flex justify-between">
//           <span>Question {currentQuestion + 1} of {questions.length}</span>
//           <span className="text-purple-400">{Math.round(progress)}%</span>
//         </div>
//         <div className="w-full bg-black/40 rounded-full h-2 backdrop-blur-sm">
//           <div 
//             className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-300 ease-in-out"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       </div>

//       {/* Question card */}
//       <div className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-lg">
//         <div className="p-6">
//           <h2 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
//             {questions[currentQuestion].question}
//           </h2>
          
//           <div className="space-y-3">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 className={`w-full text-left h-auto py-4 px-6 rounded-lg transition-all duration-200 
//                   ${answers[currentQuestion] === option 
//                     ? 'bg-purple-600 hover:bg-purple-700 text-white border-transparent' 
//                     : 'bg-black hover:bg-purple-900/30 text-purple-400 border border-purple-500/30'
//                   }`}
//                 onClick={() => handleAnswer(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="w-full max-w-md mt-6 flex justify-between">
//         <button
//           onClick={handlePrevious}
//           disabled={currentQuestion === 0}
//           className="flex items-center bg-black/40 backdrop-blur-sm text-purple-400 
//           border border-purple-500/30 hover:bg-purple-900/30 px-4 py-2 rounded-lg 
//           disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <ChevronLeft className="w-4 h-4 mr-2" />
//           Previous
//         </button>
        
//         <button
//           onClick={() => currentQuestion < questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
//           disabled={currentQuestion === questions.length - 1 || !answers[currentQuestion]}
//           className="flex items-center bg-black/40 backdrop-blur-sm text-purple-400 
//           border border-purple-500/30 hover:bg-purple-900/30 px-4 py-2 rounded-lg 
//           disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Next
//           <ChevronRight className="w-4 h-4 ml-2" />
//         </button>
//       </div>

//       {/* Progress indicator dots */}
//       <div className="flex gap-2 mt-6">
//         {questions.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full transition-all duration-300
//               ${index === currentQuestion 
//                 ? 'bg-purple-400 w-4' 
//                 : index < currentQuestion 
//                   ? 'bg-purple-600' 
//                   : 'bg-purple-900/40'
//               }`}
//           />
//         ))}
//       </div>

//       {/* Continue to Journal button */}
//       <button
//         onClick={handleContinue}
//         disabled={!isComplete}
//         className={`mt-8 px-8 py-3 rounded-lg text-white font-medium transition-all duration-300
//           ${isComplete 
//             ? 'bg-purple-600 hover:bg-purple-700 opacity-100 transform translate-y-0' 
//             : 'bg-purple-600/50 opacity-0 transform translate-y-4 cursor-not-allowed'
//           }`}
//       >
//         Continue to Journal
//       </button>
//     </div>
//   );
// };

// export default OnboardingScreen;


import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles 
} from 'lucide-react';
import JournalScreen from './journal-screen-updated.tsx';

const OnboardingScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showJournal, setShowJournal] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which experiences have you experienced before? ",
      options: ["Ketamine", "Cannabis", "⁠Ayahuasca", "Mushrooms","⁠MDMA","⁠LSD"]
    },
    {
      id: 2,
      question: "How often do you frequent these experiences?",
      options: ["Twice a week", "Once a week", "⁠Once every 2 weeks", "Once every month","Once every 3 months","Once every 6 months","⁠Once every year"]
    },
    {
      id: 3,
      question: "How many times have you had each of these experiences?",
      options: ["1x", "2x","3x","4x","5x","6x+"]
    },
    {
      id: 4,
      question: "Have you set an intention for your experiences before?",
      options: ["Yes", "No"]
    },
    {
      id: 5,
      question: "What do you normally feel after the experience?",
      options: ["Clarity", "Peace", "Joy","Love","Focus","Passion","Healing"]
    },
    {
      id: 6,
      question: "Have you ever recorded yourself speaking during an experience?",
      options: ["Yes", "No"]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  // Check if all questions have been answered
  const isComplete = Object.keys(answers).length === questions.length;

  const handleContinue = () => {
    setShowJournal(true);
  };

  if (showJournal) {
    return <JournalScreen/>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-4 flex flex-col items-center">
      {/* Header with icon */}
      <div className="w-full max-w-md flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-purple-400" />
        <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Getting Started
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md mb-6">
        <div className="text-sm text-purple-400 mb-2 flex justify-between">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-purple-400">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-black/40 rounded-full h-2 backdrop-blur-sm">
          <div 
            className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left h-auto py-4 px-6 rounded-lg transition-all duration-200 
                  ${answers[currentQuestion] === option 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white border-transparent' 
                    : 'bg-black hover:bg-purple-900/30 text-purple-400 border border-purple-500/30'
                  }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="w-full max-w-md mt-6 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex items-center bg-black/40 backdrop-blur-sm text-purple-400 
          border border-purple-500/30 hover:bg-purple-900/30 px-4 py-2 rounded-lg 
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        
        <button
          onClick={() => currentQuestion < questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
          disabled={currentQuestion === questions.length - 1 || !answers[currentQuestion]}
          className="flex items-center bg-black/40 backdrop-blur-sm text-purple-400 
          border border-purple-500/30 hover:bg-purple-900/30 px-4 py-2 rounded-lg 
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Progress indicator dots */}
      <div className="flex gap-2 mt-6">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${index === currentQuestion 
                ? 'bg-purple-400 w-4' 
                : index < currentQuestion 
                  ? 'bg-purple-600' 
                  : 'bg-purple-900/40'
              }`}
          />
        ))}
      </div>

      {/* Continue to Journal button */}
      <button
        onClick={handleContinue}
        disabled={!isComplete}
        className={`mt-8 px-8 py-3 rounded-lg text-white font-medium transition-all duration-300
          ${isComplete 
            ? 'bg-purple-600 hover:bg-purple-700 opacity-100 transform translate-y-0' 
            : 'bg-purple-600/50 opacity-0 transform translate-y-4 cursor-not-allowed'
          }`}
      >
        Continue to Journal
      </button>
    </div>
  );
};

export default OnboardingScreen;