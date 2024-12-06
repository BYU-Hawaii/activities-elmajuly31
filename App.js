import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [workout, setWorkout] = useState('');

  const logWorkout = async () => {
    // Call your API to log the workout
    // Example API call (replace with your actual API endpoint)
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ workout }),
    });

    if (response.ok) {
      alert('Workout logged successfully!');
    } else {
      alert('Failed to log workout.');
    }
  };

  return (
    <div>
      <h1>FitConnect</h1>
      <input
        type="text"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
        placeholder="Log your workout"
      />
      <button onClick={logWorkout}>Log Workout</button>
    </div>
  );
}

export default withAuthenticator(App);
