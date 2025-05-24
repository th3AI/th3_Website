import { useState } from 'react';

export default function Chatbot() {
  const [status, setStatus] = useState('loading'); // 'loading', 'loaded', 'error'

  return (
    <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <div>
            <p className="text-red-500 mb-2">Chatbot failed to load</p>
            <a 
              href="https://synthia-chatbot.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Open in new tab
            </a>
          </div>
        </div>
      )}

      <iframe
        src="https://synthia-chatbot.onrender.com"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`w-full h-full ${status !== 'loaded' ? 'invisible' : ''}`}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        allow="microphone"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}