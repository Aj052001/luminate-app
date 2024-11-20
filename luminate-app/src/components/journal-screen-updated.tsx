
// import React, { useState } from 'react';
// import { Mic, MicOff, Star, Sparkles } from 'lucide-react';
// import JourneyRoadmap from './journey-roadmap.tsx';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const JournalScreen = () => {
//   const [medicine, setMedicine] = useState('');
//   const [customMedicine, setCustomMedicine] = useState('');
//   const [intention, setIntention] = useState('');
//   const [customIntention, setCustomIntention] = useState('');
//   const [currentState, setCurrentState] = useState('');
//   const [postExperience, setPostExperience] = useState('');
//   const [isRecordingState, setIsRecordingState] = useState(false);
//   const [isRecordingPost, setIsRecordingPost] = useState(false);
//   const [showRoadmap, setShowRoadmap] = useState(false);

//   const { transcript, resetTranscript, listening } = useSpeechRecognition();

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <span>Browser does not support speech recognition.</span>;
//   }

//   const medicines = ["Psilocybin", "LSD", "DMT", "MDMA", "Ketamine", "Other"];
//   const intentions = ["Healing", "Self-discovery", "Spiritual growth", "Creative inspiration", "Personal development", "Other"];

//   const handleMedicineChange = (value) => {
//     setMedicine(value);
//     if (value === 'Other') {
//       setCustomMedicine('');
//     }
//   };

//   const handleIntentionChange = (value) => {
//     setIntention(value);
//     if (value === 'Other') {
//       setCustomIntention('');
//     }
//   };

//   const handleRecording = (field, isStarting) => {
//     resetTranscript();
//     if (isStarting) {
//       SpeechRecognition.startListening({ continuous: true });
//       field === 'state' ? setIsRecordingState(true) : setIsRecordingPost(true);
//     } else {
//       SpeechRecognition.stopListening();
//       field === 'state' ? setCurrentState(currentState + ' ' + transcript) : setPostExperience(postExperience + ' ' + transcript);
//       field === 'state' ? setIsRecordingState(false) : setIsRecordingPost(false);
//     }
//   };

//   const handleSaveJournal = () => {
//     const journalEntry = {
//       medicine: medicine === 'Other' ? customMedicine : medicine,
//       intention: intention === 'Other' ? customIntention : intention,
//       currentState,
//       postExperience
//     };
//     console.log('Journal Entry:', journalEntry);
//     setShowRoadmap(true);
//   };

//   if (showRoadmap) {
//     return <JourneyRoadmap />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-6">
//     <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-6">
//       Journey Journal
//     </h1>

//     <div className="mb-4">
//       <label className="block text-purple-400 mb-2">Medicine</label>
//       <select 
//         value={medicine}
//         onChange={(e) => handleMedicineChange(e.target.value)}
//         className="w-full bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//       >
//         <option value="">Select Medicine</option>
//         {medicines.map((med) => (
//           <option key={med} value={med}>{med}</option>
//         ))}
//       </select>
//       {medicine === 'Other' && (
//         <input 
//           type="text"
//           placeholder="Specify Medicine"
//           value={customMedicine}
//           onChange={(e) => setCustomMedicine(e.target.value)}
//           className="w-full mt-2 bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//         />
//       )}
//     </div>

//     {/* Intention Selection */}
//     <div className="mb-4">
//       <label className="block text-purple-400 mb-2">Intention</label>
//       <select 
//         value={intention}
//         onChange={(e) => handleIntentionChange(e.target.value)}
//         className="w-full bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//       >
//         <option value="">Select Intention</option>
//         {intentions.map((int) => (
//           <option key={int} value={int}>{int}</option>
//         ))}
//       </select>
//       {intention === 'Other' && (
//         <input 
//           type="text"
//           placeholder="Specify Intention"
//           value={customIntention}
//           onChange={(e) => setCustomIntention(e.target.value)}
//           className="w-full mt-2 bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//         />
//       )}
//     </div>

//     {/* Current State */}
//     <div className="mb-4 relative">
//       <label className="block text-purple-400 mb-2">Current State of Mind</label>
//       <textarea 
//         value={currentState}
//         onChange={(e) => setCurrentState(e.target.value)}
//         placeholder="Describe your current mental state..."
//         className="w-full min-h-[150px] bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//       />
//       <button 
//         onClick={() => setIsRecordingState(!isRecordingState)}
//         className={`absolute bottom-4 right-4 p-2 rounded-full transition-all ${
//           isRecordingState ? 'bg-purple-600' : 'bg-black border border-purple-500'
//         }`}
//       >
//         {isRecordingState ? <MicOff className="text-white" /> : <Mic className="text-purple-400" />}
//       </button>
//     </div>

//     {/* Post Experience */}
//     <div className="mb-4 relative">
//       <label className="block text-purple-400 mb-2">Post-Experience Outlook</label>
//       <textarea 
//         value={postExperience}
//         onChange={(e) => setPostExperience(e.target.value)}
//         placeholder="Describe your desired outcome..."
//         className="w-full min-h-[150px] bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//       />
//       <button 
//         onClick={() => setIsRecordingPost(!isRecordingPost)}
//         className={`absolute bottom-4 right-4 p-2 rounded-full transition-all ${
//           isRecordingPost ? 'bg-purple-600' : 'bg-black border border-purple-500'
//         }`}
//       >
//         {isRecordingPost ? <MicOff className="text-white" /> : <Mic className="text-purple-400" />}
//       </button>
//     </div>

//     <button 
//       onClick={handleSaveJournal}
//       className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg 
//       hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center"
//     >
//       <Star className="mr-2" /> Save Journal Entry <Sparkles className="ml-2" />
//     </button>
//   </div>
//   );
// };

// export default JournalScreen;






// // JournalScreen.js
// import React, { useState } from 'react';
// import { Mic, MicOff, Star, Sparkles } from 'lucide-react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const JournalScreen = () => {
//   // Main form states
//   const [medicine, setMedicine] = useState('');
//   const [customMedicine, setCustomMedicine] = useState('');
//   const [intention, setIntention] = useState('');
//   const [customIntention, setCustomIntention] = useState('');
//   const [currentState, setCurrentState] = useState('');
//   const [postExperience, setPostExperience] = useState('');
  
//   // Recording states
//   const [isRecordingState, setIsRecordingState] = useState(false);
//   const [isRecordingPost, setIsRecordingPost] = useState(false);

//   // Options arrays
//   const medicines = ["Psilocybin", "LSD", "DMT", "MDMA", "Ketamine", "Other"];
//   const intentions = ["Healing", "Self-discovery", "Spiritual growth", "Creative inspiration", "Personal development", "Other"];

//   // Speech recognition setup
//   const {
//     transcript,
//     resetTranscript,
//     listening,
//   } = useSpeechRecognition();

//   // Check browser support
//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   // Handle medicine selection
//   const handleMedicineChange = (value) => {
//     setMedicine(value);
//     if (value !== 'Other') {
//       setCustomMedicine('');
//     }
//   };

//   // Handle intention selection
//   const handleIntentionChange = (value) => {
//     setIntention(value);
//     if (value !== 'Other') {
//       setCustomIntention('');
//     }
//   };

//   // Handle voice recording
//   const handleRecording = (field) => {
//     resetTranscript();
    
//     if (field === 'state') {
//       if (!isRecordingState) {
//         setIsRecordingState(true);
//         setIsRecordingPost(false);
//         SpeechRecognition.startListening({ continuous: true });
//       } else {
//         setIsRecordingState(false);
//         SpeechRecognition.stopListening();
//         setCurrentState(currentState + ' ' + transcript);
//       }
//     } else {
//       if (!isRecordingPost) {
//         setIsRecordingPost(true);
//         setIsRecordingState(false);
//         SpeechRecognition.startListening({ continuous: true });
//       } else {
//         setIsRecordingPost(false);
//         SpeechRecognition.stopListening();
//         setPostExperience(postExperience + ' ' + transcript);
//       }
//     }
//   };
  

//   // Handle form submission
//   const handleSaveJournal = () => {
//     // Make sure recording is stopped
//     if (listening) {
//       SpeechRecognition.stopListening();
//       setIsRecordingState(false);
//       setIsRecordingPost(false);
//     }

//     // Create journal entry object
//     const journalEntry = {
//       medicine: medicine === 'Other' ? customMedicine : medicine,
//       intention: intention === 'Other' ? customIntention : intention,
//       currentState: currentState.trim(),
//       postExperience: postExperience.trim()
//     };

//     console.log('Saving journal entry:', journalEntry);
//     // Add your save logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-6">
//       <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-6">
//         Journey Journal
//       </h1>

//       {/* Medicine Selection */}
//       <div className="mb-4">
//         <label className="block text-purple-400 mb-2">Medicine</label>
//         <select 
//           value={medicine}
//           onChange={(e) => handleMedicineChange(e.target.value)}
//           className="w-full bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//         >
//           <option value="">Select Medicine</option>
//           {medicines.map((med) => (
//             <option key={med} value={med}>{med}</option>
//           ))}
//         </select>
        
//         {medicine === 'Other' && (
//           <input 
//             type="text"
//             placeholder="Specify Medicine"
//             value={customMedicine}
//             onChange={(e) => setCustomMedicine(e.target.value)}
//             className="w-full mt-2 bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//           />
//         )}
//       </div>

//       {/* Intention Selection */}
//       <div className="mb-4">
//         <label className="block text-purple-400 mb-2">Intention</label>
//         <select 
//           value={intention}
//           onChange={(e) => handleIntentionChange(e.target.value)}
//           className="w-full bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//         >
//           <option value="">Select Intention</option>
//           {intentions.map((int) => (
//             <option key={int} value={int}>{int}</option>
//           ))}
//         </select>
        
//         {intention === 'Other' && (
//           <input 
//             type="text"
//             placeholder="Specify Intention"
//             value={customIntention}
//             onChange={(e) => setCustomIntention(e.target.value)}
//             className="w-full mt-2 bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//           />
//         )}
//       </div>

//       {/* Current State with Voice Input */}
//       <div className="mb-4 relative">
//         <label className="block text-purple-400 mb-2">
//           Current State of Mind
//           {isRecordingState && (
//             <span className="ml-2 text-purple-300 text-sm animate-pulse">Recording...</span>
//           )}
//         </label>
//         <textarea 
//           value={isRecordingState ? currentState + ' ' + transcript : currentState}
//           onChange={(e) => setCurrentState(e.target.value)}
//           placeholder="Describe your current mental state..."
//           className="w-full min-h-[150px] bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//         />
//         <button 
//           onClick={() => handleRecording('state')}
//           className={`absolute bottom-4 right-4 p-2 rounded-full transition-all ${
//             isRecordingState ? 'bg-purple-600' : 'bg-black border border-purple-500'
//           }`}
//         >
//           {isRecordingState ? 
//             <MicOff className="text-white" /> : 
//             <Mic className="text-purple-400" />
//           }
//         </button>
//       </div>

//       {/* Post Experience with Voice Input */}
//       <div className="mb-4 relative">
//         <label className="block text-purple-400 mb-2">
//           Post-Experience Outlook
//           {isRecordingPost && (
//             <span className="ml-2 text-purple-300 text-sm animate-pulse">Recording...</span>
//           )}
//         </label>
//         <textarea 
//           value={isRecordingPost ? postExperience + ' ' + transcript : postExperience}
//           onChange={(e) => setPostExperience(e.target.value)}
//           placeholder="Describe your desired outcome..."
//           className="w-full min-h-[150px] bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
//         />
//         <button 
//           onClick={() => handleRecording('post')}
//           className={`absolute bottom-4 right-4 p-2 rounded-full transition-all ${
//             isRecordingPost ? 'bg-purple-600' : 'bg-black border border-purple-500'
//           }`}
//         >
//           {isRecordingPost ? 
//             <MicOff className="text-white" /> : 
//             <Mic className="text-purple-400" />
//           }
//         </button>
//       </div>

//       {/* Save Button */}
//       <button 
//         onClick={handleSaveJournal}
//         className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg 
//         hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center"
//       >
//         <Star className="mr-2" /> Save Journal Entry <Sparkles className="ml-2" />
//       </button>
//     </div>
//   );
// };

// export default JournalScreen;

import React, { useState } from "react";
import { Mic, MicOff, Star, Sparkles } from "lucide-react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import MuscleSelector from "./Body-part";

const JournalScreen = () => {
  const [medicine, setMedicine] = useState("");
  const [customMedicine, setCustomMedicine] = useState("");
  const [intention, setIntention] = useState("");
  const [customIntention, setCustomIntention] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [postExperience, setPostExperience] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [recordingField, setRecordingField] = useState("");

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const toggleRecording = (field) => {
    resetTranscript();
    if (listening && recordingField === field) {
      SpeechRecognition.stopListening();
      setRecordingField("");
      if (field === "currentState") {
        setCurrentState(prev => prev + " " + transcript);
      } else if (field === "postExperience") {
        setPostExperience(prev => prev + " " + transcript);
      }
    } else {
      setRecordingField(field);
      SpeechRecognition.startListening({ continuous: true });
    }
  };


    const medicines = ["Psilocybin", "LSD", "DMT", "MDMA", "Ketamine", "Other"];
  const intentions = [
    "Healing",
    "Self-discovery",
    "Spiritual growth",
    "Creative inspiration",
    "Personal development",
    "Other",
  ];


  const handleSaveJournal = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setRecordingField("");
    }

    const journalEntry = {
      medicine: medicine === "Other" ? customMedicine : medicine,
      intention: intention === "Other" ? customIntention : intention,
      currentState: currentState.trim(),
      postExperience: postExperience.trim(),
    };

    console.log("Saving journal entry:", journalEntry);
    setShowRoadmap(true);
  };

  if (showRoadmap) {
    return <MuscleSelector/>;
  }


// import React, { useState } from "react";
// import { Mic, MicOff, Star, Sparkles } from "lucide-react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const JournalScreen = () => {
//   // Main form states
//   const [medicine, setMedicine] = useState("");
//   const [customMedicine, setCustomMedicine] = useState("");
//   const [intention, setIntention] = useState("");
//   const [customIntention, setCustomIntention] = useState("");
//   const [currentState, setCurrentState] = useState("");
//   const [postExperience, setPostExperience] = useState("");
// const [showRoadmap, setShowRoadmap] = useState(false);

//   // Recording states
//   const [recordingField, setRecordingField] = useState("");

//   // Options arrays
//   const medicines = ["Psilocybin", "LSD", "DMT", "MDMA", "Ketamine", "Other"];
//   const intentions = [
//     "Healing",
//     "Self-discovery",
//     "Spiritual growth",
//     "Creative inspiration",
//     "Personal development",
//     "Other",
//   ];

//   // Speech recognition setup
//   const { transcript, resetTranscript, listening } = useSpeechRecognition();

//   // Check browser support
//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   // Handle voice recording
//   const toggleRecording = (field) => {
//     resetTranscript();

//     if (listening && recordingField === field) {
//       SpeechRecognition.stopListening();
//       setRecordingField("");

//       // Update the relevant state with the transcript
//       if (field === "currentState") {
//         setCurrentState((prev) => prev + " " + transcript);
//       } else if (field === "postExperience") {
//         setPostExperience((prev) => prev + " " + transcript);
//       }
//     } else {
//       setRecordingField(field);
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   };



//   // Handle form submission
//   // const handleSaveJournal = () => {
//   //   if (listening) {
//   //     SpeechRecognition.stopListening();
//   //     setRecordingField("");
//   //   }

//   // const handleSaveJournal = () => {
//   //   const journalEntry = {
//   //     medicine: medicine === 'Other' ? customMedicine : medicine,
//   //     intention: intention === 'Other' ? customIntention : intention,
//   //     currentState,
//   //     postExperience
//   //   };
//   //   console.log('Journal Entry:', journalEntry);
//   //   setShowRoadmap(true);
//   // };


//   const handleSaveJournal = () => {
//     if (listening) {
//       SpeechRecognition.stopListening();
//       setRecordingField("");
//     }
  
//     const journalEntry = {
//       medicine: medicine === "Other" ? customMedicine : medicine,
//       intention: intention === "Other" ? customIntention : intention,
//       currentState: currentState.trim(),
//       postExperience: postExperience.trim(),
//     };
  
//     console.log("Journal Entry:", journalEntry);
//     setShowRoadmap(true);
//   };
  
  

//     const journalEntry = {
//       medicine: medicine === "Other" ? customMedicine : medicine,
//       intention: intention === "Other" ? customIntention : intention,
//       currentState: currentState.trim(),
//       postExperience: postExperience.trim(),
//     };

//     console.log("Saving journal entry:", journalEntry);
//     // Add save logic here (e.g., send to server or save to local storage)
//   };

//   if (showRoadmap) {
//     return <JourneyRoadmap />;
//   }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-6">
      <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-6">
        Journey Journal
      </h1>

      {/* Medicine Selection */}
      <div className="mb-4">
        <label className="block text-purple-400 mb-2">Medicine</label>
        <select
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="w-full bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
        >
          <option value="">Select Medicine</option>
          {medicines.map((med) => (
            <option key={med} value={med}>
              {med}
            </option>
          ))}
        </select>
        {medicine === "Other" && (
          <input
            type="text"
            placeholder="Specify Medicine"
            value={customMedicine}
            onChange={(e) => setCustomMedicine(e.target.value)}
            className="w-full mt-2 bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
          />
        )}
      </div>

      {/* Intention Selection */}
      <div className="mb-4">
        <label className="block text-purple-400 mb-2">Intention</label>
        <select
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          className="w-full bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
        >
          <option value="">Select Intention</option>
          {intentions.map((int) => (
            <option key={int} value={int}>
              {int}
            </option>
          ))}
        </select>
        {intention === "Other" && (
          <input
            type="text"
            placeholder="Specify Intention"
            value={customIntention}
            onChange={(e) => setCustomIntention(e.target.value)}
            className="w-full mt-2 bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
          />
        )}
      </div>

      {/* Current State with Voice Input */}
      <div className="mb-4 relative">
        <label className="block text-purple-400 mb-2">
          Current State of Mind
          {listening && recordingField === "currentState" && (
            <span className="ml-2 text-purple-300 text-sm animate-pulse">
              Recording...
            </span>
          )}
        </label>
        <textarea
          value={
            listening && recordingField === "currentState"
              ? currentState + " " + transcript
              : currentState
          }
          onChange={(e) => setCurrentState(e.target.value)}
          placeholder="Describe your current mental state..."
          className="w-full min-h-[150px] bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
        />
      
        <button
  onClick={() => toggleRecording("currentState")}
  className={`absolute bottom-4 right-4 p-2 rounded-full transition-all ${
    listening && recordingField === "currentState" ? "bg-purple-600" : "bg-black border border-purple-500"
  }`}
>
  {listening && recordingField === "currentState" ? (
    <Mic className="text-purple-400" /> // Show the "on" Mic when actually listening
  ) : (
    <MicOff className="text-white" /> // Show the "off" MicOff when not listening
  )}
</button>
      </div>

      {/* Post Experience with Voice Input */}
      <div className="mb-4 relative">
        <label className="block text-purple-400 mb-2">
          Post-Experience Outlook
          {listening && recordingField === "postExperience" && (
            <span className="ml-2 text-purple-300 text-sm animate-pulse">
              Recording...
            </span>
          )}
        </label>
        <textarea
          value={
            listening && recordingField === "postExperience"
              ? postExperience + " " + transcript
              : postExperience
          }
          onChange={(e) => setPostExperience(e.target.value)}
          placeholder="Describe your desired outcome..."
          className="w-full min-h-[150px] bg-black border-2 border-purple-500 text-purple-300 rounded-lg p-3"
        />
       

<button
  onClick={() => toggleRecording("postExperience")}
  className={`absolute bottom-4 right-4 p-2 rounded-full transition-all ${
    listening && recordingField === "postExperience" ? "bg-purple-600" : "bg-black border border-purple-500"
  }`}
>
  {listening && recordingField === "postExperience" ? (
    <Mic className="text-purple-400" /> // Show the "on" Mic when actually listening
  ) : (
    <MicOff className="text-white" /> // Show the "off" MicOff when not listening
  )}
</button>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveJournal}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg 
        hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center"
      >
        <Star className="mr-2" /> Save Journal Entry <Sparkles className="ml-2" />
      </button>
    </div>
  );
};

export default JournalScreen;



