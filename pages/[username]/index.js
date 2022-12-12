import { useContext } from 'react'
import { UserContext } from '../../lib/context'
import Link from 'next/link'

export default function UserPage({}) {
  const { user, username } = useContext(UserContext)
  console.log(JSON.stringify(user))

  if (!user || !username) {
    return (
        <div className="bg-white px-4 py-8 rounded-2xl flex flex-col items-center justify-center w-1/2 mx-auto">
            <Link href="/enter">
             <button className="bg-sky-300 text-white font-bold py-2 px-4 rounded-full">You must be signed in</button>
            </Link>
        </div>
    )
  }

  return (
    <div className="bg-white px-4 py-8 rounded-2xl flex flex-col items-center justify-center w-1/2 mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Mini-Twit
        <span className="text-sky-300">
          {" "}{username.charAt(0).toUpperCase() + username.slice(1)}
        </span>
      </h1>
      <p className="text-center mb-4">You are signed in with <span className="text-sky-300"> {user.email} </span></p>
    <button className="bg-sky-300 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
        auth.signOut();
        toast.success('Signed out!');
    }}>Log Out</button>
    </div>
  );
  
}
