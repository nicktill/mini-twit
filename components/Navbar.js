import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { toast } from "react-hot-toast";

// Top navbar

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="bg-sky-300 text-white font-bold py-2 px-4 rounded-full">
              mini-twit
            </button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {user && username && (
          <>
            <li className="push-left">
              <Link href="/tweet">
                <button className="bg-transparent text-sky-300 outline font-bold py-2 px-4 rounded-full">
                  Tweet
                </button>
              </Link>
            </li>
            <li className="">
              <button
                className="bg-sky-300 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                  auth.signOut();
                  toast.success("Signed out!");
                }}
              >
                Log Out
              </button>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img
                  src={user.photoURL}
                  alt="profile_picture"
                  width="30px"
                  height="30px"
                />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="bg-transparent text-sky-300 outline font-bold py-2 px-4 rounded-full">
                Log in
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
