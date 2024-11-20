import React, { useState } from 'react';
import { 
  Sparkles,
  Moon, 
  Sun, 
  Heart,
  X,
  ChevronRight,
  Star,
  Brain,
  Leaf
} from 'lucide-react';

interface Level {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;  // Changed from LucideIcon to React.ElementType
  prompt: string;
}

interface LevelInputs {
  [key: number]: string;
}

const JourneyRoadmap: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [levelInputs, setLevelInputs] = useState<LevelInputs>({});
  const [completedLevels, setCompletedLevels] = useState<number[]>([1]);

  const levels: Level[] = [
    {
      id: 1,
      title: "Preparation",
      description: "Set your intentions",
      icon: Star,
      prompt: "What are your intentions for this journey?"
    },
    {
      id: 2,
      title: "Onset",
      description: "Initial effects begin",
      icon: Leaf,
      prompt: "How are you feeling as the journey begins?"
    },
    {
      id: 3,
      title: "Come Up",
      description: "Energy building",
      icon: Moon,
      prompt: "Describe your sensations"
    },
    {
      id: 4,
      title: "Peak",
      description: "Deep experience",
      icon: Sun,
      prompt: "Share your insights"
    },
    {
      id: 5,
      title: "Return",
      description: "Gentle descent",
      icon: Brain,
      prompt: "What revelations came to you?"
    },
    {
      id: 6,
      title: "Integration",
      description: "Processing insights",
      icon: Heart,
      prompt: "How has this changed you?"
    }
  ];

  const handleInputChange = (levelId: number, value: string): void => {
    setLevelInputs(prev => ({
      ...prev,
      [levelId]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-purple-400" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Journey Stages
        </h1>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto w-80">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-600/50 transform -translate-x-1/2" />

        {/* Levels */}
        <div className="relative space-y-16">
          {levels.map((level, index) => {
            const Icon = level.icon;
            const isUnlocked = completedLevels.includes(level.id);
            const isLeft = index % 2 === 0;

            return (
              <div key={level.id} className="relative">
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <button
                    onClick={() => isUnlocked && setSelectedLevel(level)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center
                      ${isUnlocked 
                        ? 'bg-black border-2 border-purple-400 cursor-pointer hover:scale-110' 
                        : 'bg-black/50 border-2 border-purple-900 cursor-not-allowed'
                      } transition-all duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${isUnlocked ? 'text-purple-400' : 'text-purple-900'}`} />
                  </button>
                </div>

                {/* Content Container */}
                <div className="flex justify-between items-center h-12">
                  {/* Left Side */}
                  <div className={`w-30 ${isLeft ? 'block' : 'invisible'} text-right`}>
                    <h3 className={`font-medium ${isUnlocked ? 'text-purple-400' : 'text-purple-900'}`}>
                      {level.title}
                    </h3>
                    <p className={`text-sm ${isUnlocked ? 'text-purple-300' : 'text-purple-900/60'}`}>
                      {level.description}
                    </p>
                  </div>

                  {/* Space for Node */}
                  <div className="w-12" />

                  {/* Right Side */}
                  <div className={`w-30 ${!isLeft ? 'block' : 'invisible'} text-left`}>
                    <h3 className={`font-medium ${isUnlocked ? 'text-purple-400' : 'text-purple-900'}`}>
                      {level.title}
                    </h3>
                    <p className={`text-sm ${isUnlocked ? 'text-purple-300' : 'text-purple-900/60'}`}>
                      {level.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Compact Popup */}
      {selectedLevel && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-sm bg-black/95 border border-purple-500/30 shadow-xl rounded-lg">
            <div className="relative pt-8 pb-6 px-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedLevel(null)}
                className="absolute right-4 top-4 text-purple-400 hover:bg-purple-950/30 rounded-full p-2"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {selectedLevel.title}
                  </h2>
                  <p className="text-purple-300/80 text-sm leading-relaxed">
                    {selectedLevel.description}
                  </p>
                </div>
                
                {/* Input Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-purple-400 text-sm font-medium block pl-1">
                      {selectedLevel.prompt}
                    </label>
                    <textarea
                      value={levelInputs[selectedLevel.id] || ''}
                      onChange={(e) => handleInputChange(selectedLevel.id, e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full min-h-[150px] bg-black border-2 border-purple-500/30 text-purple-200
                      placeholder:text-purple-500/40 focus:border-purple-400 rounded-lg resize-none p-4
                      hover:border-purple-500/50 transition-colors text-sm"
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={() => {
                      if (selectedLevel.id < levels.length) {
                        setCompletedLevels(prev => [...new Set([...prev, selectedLevel.id + 1])]);
                      }
                      setSelectedLevel(null);
                    }}
                    className="w-full h-11 bg-gradient-to-r from-purple-600 to-purple-800 
                    hover:from-purple-700 hover:to-purple-900 text-white text-sm font-medium rounded-lg
                    transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center"
                  >
                    Save & Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JourneyRoadmap;