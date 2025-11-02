import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runBatchJob = () => {
    setIsRunning(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="app-container">
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card
          title="Orange Standard - Batch App"
          subTitle="Turborepo + Vite + React + PrimeReact"
          className="max-w-2xl w-full"
        >
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-2 items-center">
              <i className="pi pi-cog text-blue-500 text-2xl"></i>
              <span className="text-lg">Batch Processing Application</span>
            </div>

            <div className="card flex flex-col gap-4 items-center w-full">
              <p className="text-gray-600">Batch Job Demo:</p>
              <ProgressBar
                value={progress}
                className="w-full"
                showValue={true}
              />
              <Button
                label={isRunning ? 'Running...' : 'Start Batch Job'}
                icon={isRunning ? 'pi pi-spin pi-spinner' : 'pi pi-play'}
                onClick={runBatchJob}
                disabled={isRunning}
                className="p-button-lg"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>✓ Vite 7 + React 18</p>
              <p>✓ PrimeReact 10.9.7 (Styled Mode)</p>
              <p>✓ TypeScript</p>
              <p>✓ Turborepo Monorepo</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
