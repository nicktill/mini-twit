import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import MustSignIn from "../components/MustSignIn";

// import icons from your icon library of choice
import { FaHeart, FaReply } from "react-icons/fa";

function TweetForm() {
  const [inputValue, setInputValue] = useState("");
  const [tweets, setTweets] = useState([]);
  const { user, username } = useContext(UserContext);
  const [isLiked, setLiked] = useState(false);

  const handleSubmit = () => {
    setTweets([...tweets, { text: inputValue }]);
    setInputValue(""); // clear input field
    // add toast alert success for tweet
    toast.success("Tweeted!");
  };

  // ensure we have a user to show the tweet form
  if (!user || !username) {
    return <MustSignIn />;
  }

  return (
    <div>
      {/* input form for creating a new tweet */}
      <div
        className="bg-white rounded-lg p-4 shadow"
        style={{ width: "300px", margin: "auto" }}
      >
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

      {/* map through the list of tweets and display them */}
      {tweets.map((tweet) => (
        <div className="mt-4" key={tweet.id}>
          <div
            className="bg-white rounded-lg p-4 shadow"
            style={{ width: "300px", margin: "auto" }}
          >
            {/* display the user's profile picture and username */}
            <div className="flex justify-between items-center px-4">
              {/* user pic */}
              {user?.photoURL && (
                <img
                  className="rounded-full"
                  src={user?.photoURL}
                  alt="profile_picture"
                  width="40px"
                  height="40px"
                />
              )}
              {/* username */}
              <div className="font-bold text-gray-300">
                {"@"}
                {username}
              </div>
            </div>
            {/* display the tweet text */}
            <div className="text-gray-500 px-4 pt-4">{tweet.text}</div>
            {/* add icons for favorite and reply */}
            <div className="flex justify-end items-center px-4 mt-2">
              {/* favorite icon */}
              <div
                className={`cursor-pointer mr-2 transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-rose-300 ${
                  isLiked ? "text-rose-400" : "text-rose-200"
                }`}
                onClick={() => setLiked(!isLiked)}
              >
                <FaHeart />
              </div>
              {/* reply icon */}
              <div
                className={`cursor-pointer text-sky-200 hover:scale-125 duration-300 hover:text-sky-300`}
              >
                <FaReply />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetForm;
