import React, { useState, useEffect } from 'react';  // import necessary hooks

function OnlineStatusTracker() {
  // Step 1: Create a state variable to store the online status
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  // navigator.onLine gives you true (online) or false (offline)

  // Step 2: Set up event listeners with useEffect
  useEffect(() => {
    // This function runs when user goes online
    const handleOnline = () => setIsOnline(true);

    // This function runs when user goes offline
    const handleOffline = () => setIsOnline(false);

    // Listen for changes in internet connection
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners when component is removed
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);  // The empty [] means this effect runs once when the component mounts

  // Step 3: Show the current status in the UI
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Internet Connection Status</h2>
      <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? '🟢 You are online' : '🔴 You are offline'}
      </p>
    </div>
  );
}

export default OnlineStatusTracker;
