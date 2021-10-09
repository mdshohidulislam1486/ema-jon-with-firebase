import { SignInMethod } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilizeAuthentication =()=>{
   initializeApp(firebaseConfig);
}

export default initilizeAuthentication;

/* steps for authentication
------------------------------------
Initial setup 
1. firebase: create projects
2. create web app
3. get configuration 
4. initialize firebase
5. enable auth method

*/


/* steps 2:
1. create login component 
2. create register component
3. create route for Login and register 

*/

/* step 3 
1. set up login or sign in SignInMethod
2. set up sign out SignInMethod
3. and made an special observer  
4. special observer
5. regurn necessary methods and states from useFirebase

step 4

1. create a auth context 
2. Create context provider
3. use auth provider 
4. create useAuth Hook
5. set Context provider vlaue 

steps-5
1. create private route 
2. set prive route
*/
