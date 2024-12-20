import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';

type ApiResponse = {
  results: Array<any>;
  info: any;
};

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data: ApiResponse = await response.json();
        setUser(data.results[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ProfileCard user={user} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;