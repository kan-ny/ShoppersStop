// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup,  signInWithRedirect, 
    GoogleAuthProvider, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
// kanny8
const firebaseConfig = {
  apiKey: "AIzaSyAlDr4RK6cEZ9mNHgtcSJpxRoiW1BKl1v0",
  authDomain: "learnreact-a0d4f.firebaseapp.com",
  projectId: "learnreact-a0d4f",
  storageBucket: "learnreact-a0d4f.appspot.com",
  messagingSenderId: "861874492149",
  appId: "1:861874492149:web:855da33aca309676122bbc"
};

// // kanny027
// const firebaseConfig = {
//   apiKey: "AIzaSyB5lcC4w4g5QPte41lLZKes6RK6MwUeENw",
//   authDomain: "basicreact-6fda3.firebaseapp.com",
//   projectId: "basicreact-6fda3",
//   storageBucket: "basicreact-6fda3.appspot.com",
//   messagingSenderId: "611930053636",
//   appId: "1:611930053636:web:1d153cc4a5f85d77ef6951"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (userAuth, extraData = {})=> {
    const userDoc = doc(db, 'users', userAuth.uid );
    // console.log('userDoc', userDoc);
    const userSnapShot = await getDoc(userDoc);
    // console.log('userSnapShot', userSnapShot, userAuth);
    const e = userSnapShot.exists();



    if(!e){
        // console.log('creating new');
        try {
            const { displayName, email,  } = userAuth; 
            const createdAt = new Date();
            await setDoc(userDoc,{email, displayName, createdAt, ...extraData});

        } catch (error) {
            console.log(error, 'Error while creating doc');
        }
    }

    // return userDoc;
    // required for saga
    return userSnapShot;


}

export const signInAuthWithEmainAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
} 


export const userSignOut = async () => {
    return await signOut(auth);
}

export const onAuthStateListiener = (callback) => {
    return onAuthStateChanged(auth, callback);
}

export const addCollectionAndDoc = async (collectionKey, objToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objToAdd.forEach((obj)=> {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    });

    await batch.commit();
    console.log('addCollectionAndDoc done');
}


export const getCollectionAndDoc = async () => {

    // used the same 'categories' name while inserting from product context.  
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnap)=> {
        const { title, items } = docSnap.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;

}

export const getCurrentUser = () => {
    return new Promise((resolve, reject)=>{
        const subscribe = onAuthStateChanged(auth,
            (authUser)=>{
                resolve(authUser)
                subscribe();
            },reject
            );
    })
}