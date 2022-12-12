import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import MustSignIn from '../components/MustSignIn';

function TweetForm() {
  const [inputValue, setInputValue] = useState('');
  const [tweets, setTweets] = useState([]);
  const { user, username } = useContext(UserContext);

  const handleSubmit = () => {
    setTweets([...tweets, { text: inputValue }]);
    // add toast alert success for tweet
    toast.success('Tweeted!');
  };

// ensure we have a user to show the tweet form
  if (!user || !username) {
    return (
        <MustSignIn />
    )
  }

  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow" style={{ width: '300px', margin: 'auto' }}>
        <input
          className="border text-sm rounded-lg p-2 w-full text-black"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="What's happening?"
        />
        <button
          className="bg-transparent scale-75 text-sky-300 outline font-bold py-2 px-4 rounded-full"
          type="submit"
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
      {tweets.map((tweet) => (
        <div className="mt-4" key={tweet.id}>
          <div className="bg-white rounded-lg p-4 shadow" style={{ width: '300px', margin: 'auto' }}>
            <div className="flex justify-between items-center px-4">
              {user?.photoURL && (
                <img
                  className="rounded-full"
                  src={user?.photoURL} 
                  alt="profile_picture"
                  width="40px"
                  height="40px"
                />
              )}
              <div className="font-bold text-gray-300">{'@'}{username}</div>
            </div>
            <div className="text-gray-600 px-4 pt-4">{tweet.text}</div>
          </div>
        </div>
      ))}
    </div>
  );  
  
}

export default TweetForm;
