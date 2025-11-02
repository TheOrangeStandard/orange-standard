import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card
          title="Orange Standard - Web App"
          subTitle="Turborepo + Vite + React + PrimeReact"
          className="max-w-2xl w-full"
        >
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-2 items-center">
              <i className="pi pi-check-circle text-green-500 text-2xl"></i>
              <span className="text-lg">Web Application is Running</span>
            </div>

            <div className="card flex flex-col gap-2 items-center">
              <p className="text-gray-600">Counter Demo with PrimeReact:</p>
              <Button
                label={`Count: ${count}`}
                icon="pi pi-plus"
                onClick={() => setCount((count) => count + 1)}
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
