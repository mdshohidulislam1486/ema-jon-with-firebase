import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import initilizeAuthentication from "../components/Firebase/firebase.init";


initilizeAuthentication();
const useFirebase =()=>{
    const [user, setUser] = useState({})
    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider;
    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
       
    }

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    // observer weather user auth changed or not 

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
                // ...
              } 
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}


export default useFirebase;