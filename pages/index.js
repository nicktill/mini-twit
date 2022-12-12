import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast';
import { auth } from '../lib/firebase'

export default function Home() {

  function SignOutButton() {
    return <button className="outline bg-transparent text-sky-400 font-bold py-2 px-4 rounded-full border border-sky-400" onClick={() => {
      auth.signOut();
      toast.success('Signed out!');
    }}>Sign Out</button>;
  }

  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-sky-400">Welcome to Mini-Twit!</h1>
        <p className="text-xl">A twitter clone built with Next.js/Firebase</p>
        {/* logut button */}
        <SignOutButton />
      </div>
  );
}


// button which on click will show a toast tweet success
   {/* <button className="" onClick={() => toast.success('tweeted!')}>
        tweet 
      </button> */}