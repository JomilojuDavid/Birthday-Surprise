import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={
      <div className="fixed inset-0 bg-gradient-to-br from-rose-500 via-lavender-500 to-rose-600 flex items-center justify-center z-50 p-8">
        <div className="text-center">
          <div className="w-24 h-24 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-8 shadow-2xl" />
          <h2 className="text-3xl font-playfair font-bold text-white drop-shadow-lg mb-2">Almost there...</h2>
          <p className="text-xl font-poppins text-white/90 drop-shadow-md">Loading your special experience ✨</p>
        </div>
      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>,
)
