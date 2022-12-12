import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Home() {
  
  const { user, username } = useContext(UserContext);
  console.log("User, Username Here" + user, username)

  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-sky-300 md: text-1xl">Welcome to Mini-Twit!</h1>
        <p className="text-xl">A twitter clone built with Next.js/Firebase</p>
      </div>
  );
}