import { useContext } from 'react'
import { UserContext } from '../../lib/context'
import MustSignIn from '../../components/MustSignIn'
import { auth } from '../../lib/firebase'
import toast from 'react-hot-toast'

export default function UserPage({}) {
  const { user, username } = useContext(UserContext)
  console.log(JSON.stringify(user))

  if (!user || !username) {
    return (
        <MustSignIn />
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
      <p className="text-center">Account Created:</p> <span className="text-sky-300" >{auth.currentUser.metadata.creationTime} </span>
    <button className="bg-sky-300 text-white font-bold py-2 px-4 rounded-full" 
        onClick={ async () => {
            await auth.signOut().then(() => {
                toast.success('You have been signed out');
            })
        }}>
        Log Out
    </button>
    </div>
  );
  
}
