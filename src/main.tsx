import './globalCSS/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}






/*-----------------------------------------------------------------------------

1. 	Concurrent Rendering
React can prepare multiple UI updates in the background and apply them when ready, improving responsiveness.
2. 	Automatic Batching
Multiple state updates inside async events (like promises, timeouts, or native event handlers) are batched together automatically, reducing unnecessary re-renders.
3. 	Transitions ()
You can mark updates as “non-urgent” so React prioritizes urgent updates (like typing) while deferring slower ones (like filtering a list).
4. 	Strict Mode Enhancements
In React 18, Strict Mode intentionally double-invokes certain lifecycle methods and effects to help detect side effects and ensure components are resilient to concurrent rendering.
5. 	Improved Suspense
Suspense now works better with concurrent rendering, allowing smoother loading states and streaming server rendering.

📝 Example


👉 In short:  is not just a syntax change — it unlocks React 18’s performance and concurrency improvements.
Would you like me to also show you a before vs after comparison of how batching works differently in React 17 vs React 18?


-----------------------------------------------------------------------------*/


