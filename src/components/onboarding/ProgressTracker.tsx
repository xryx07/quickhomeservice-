
import { CheckCircle } from 'lucide-react';

interface ProgressTrackerProps {
  currentStep: number;
  steps: { id: number; label: string }[];
}

const ProgressTracker = ({ currentStep, steps }: ProgressTrackerProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                currentStep > step.id 
                  ? 'bg-green-500 text-white dark:bg-green-600' 
                  : currentStep === step.id 
                    ? 'bg-brand-600 text-white dark:bg-brand-500' 
                    : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              {currentStep > step.id ? <CheckCircle size={18} /> : step.id}
            </div>
            <span className={`text-sm ${currentStep === step.id ? 'font-medium' : 'text-muted-foreground'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative h-1 bg-gray-200 dark:bg-gray-800 mt-4">
        <div 
          className="absolute top-0 left-0 h-full bg-brand-600 dark:bg-brand-500"
          style={{ width: `${(currentStep - 1) * 33.33}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
