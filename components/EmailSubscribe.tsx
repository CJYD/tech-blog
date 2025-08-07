'use client';

import { useState } from 'react';

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Stay updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get new posts delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors text-sm"
                disabled={status === 'loading'}
                required
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="mt-3 text-sm text-green-600">
                Thanks for subscribing!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}