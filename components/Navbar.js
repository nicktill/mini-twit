import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import Image from 'next/image';

// Top navbar

export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="navbar">
        <ul>
            <li>
            <Link href="/">
                <button className="bg-sky-400 text-white font-bold py-2 px-4 rounded-full">mini-twit</button>
            </Link>
            </li>

            {/* user is signed-in and has username */}
            {username && (
                <>
                <li className="push-left">
                <Link href="/admin">
                    <button className="bg-sky-400 text-white font-bold py-2 px-4 rounded-full" >Write Posts</button>
                </Link>
                </li>
                <li>
                <Link href={`/${username}`}>
                    <img src={user?.photoURL} alt="profile" width="30px" height="30px" />
                </Link>
                </li>
                </>
            )}

            {/* user is not signed OR has not created username */}
            {!username && (
            <li>
                <Link href="/enter">
                <button className="bg-transparent text-sky-500 outline font-bold py-2 px-4 rounded-full">Log in</button>
                </Link>
            </li>
            )}
        </ul>
        </nav>
    );
}