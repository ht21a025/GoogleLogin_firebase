import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Home() {
    const [user] = useAuthState(auth);

  return (
    <div>
        {user ? (
            <div>
            <UserInfo />
            <SignOutButton />
            </div>
        ) : (
            <SignInButton />
        )}
    </div>
  )
}

export default Home

function SignInButton() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };
    return (
        <button onClick={signInWithGoogle}>
            <p>グーグルでサインイン</p>
        </button>
    );
}

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    );
}

function UserInfo() {
    const [user] = useAuthState(auth);
    return(
        <div className='userInfo'>
                {user && user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} />
                ) : (
                    <p>プロフィール画像がありません</p>
                )}
                <p>{user && user.displayName}</p>
        </div>
    );
}