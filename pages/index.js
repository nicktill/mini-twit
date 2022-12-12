import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast';
import { auth } from '../lib/firebase'
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


// // button which on click will show a toast tweet success
//    {/* <button className="" onClick={() => toast.success('tweeted!')}>
//         tweet 
//       </button> */}