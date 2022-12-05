
import {auth, googleAuthProvider} from '../lib/firebase';
import {useContext} from 'react';
import {UserContext} from '../lib/context';
import toast from 'react-hot-toast';

export default function EnterPage() {
    const {user, username} = useContext(UserContext);
    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
        <main>
        {user ? 
            !username ? <UsernameForm /> : <SignOutButton /> 
            : 
            <SignInButton />
        }
        </main>
    );
}

console.log("AUTH HERE", auth.currentUser.metadata.creationTime)

// call signInWithPopup providing googleAuthProvider from Firebase setup
function SignInButton() {
   const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
        toast.success('Hello! ' + auth.currentUser.email);
   }
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
          <Image src={'/google.png'} /> Sign in with Google
        </button>
      );
}

// sign out button
function SignOutButton() {
    return <button onClick={() => {
        toast('See you later!', {
            icon: '👋 ',
          });
        auth.signOut()
    }}>Sign Out</button>;
}


// username form to select username
function UsernameForm() {
    return (
        <main>
            <h3>Choose Username</h3>
            <input name="username" placeholder="username" />
            <button type="submit">Choose</button>
            <SignOutButton />

        </main>
    )
}