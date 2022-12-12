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
          className="border rounded-lg p-2 w-full"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add your tweet here..."
        />
        <button
          className="bg-sky-300 rounded-lg py-2 px-4 mt-4 text-white font-bold"
          type="submit"
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
      {tweets.map((tweet) => (
        <div className="mt-4">
          <div className="bg-white rounded-lg p-4 shadow" style={{ width: '300px', margin: 'auto' }}>
            <div className="flex justify-between items-center px-4">
              {user?.photoURL && (
                <img
                  className="rounded-full"
                  src={user?.photoURL} 
                  alt="profile_picture"
                  width="30px"
                  height="30px"
                />
              )}
              <div className="font-bold text-gray-300">{'@'}{username}</div>
            </div>
            <div className="text-sky-200 px-4 pt-4 pb-2 text-center">{tweet.text}</div>
          </div>
        </div>
      ))}
    </div>
  );  
  
}

export default TweetForm;
