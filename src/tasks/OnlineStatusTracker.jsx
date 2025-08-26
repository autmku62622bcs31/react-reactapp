import React, { useState, useEffect } from 'react';  

function OnlineStatusTracker() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
  }, []); 

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Internet Connection Status</h2>
      <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'You are online' : 'You are offline'}
      </p>
    </div>
  );
}

export default OnlineStatusTracker;
