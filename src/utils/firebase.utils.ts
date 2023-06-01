import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
} from 'firebase/firestore';
import {ProductInterface} from "../interfaces/product.interface";

const firebaseConfig = {
  apiKey: "AIzaSyCaM0tf6aqdKGb1QBaS6ureiAEA6TcpRWU",
  authDomain: "clothing-shop-a0d51.firebaseapp.com",
  projectId: "clothing-shop-a0d51",
  storageBucket: "clothing-shop-a0d51.appspot.com",
  messagingSenderId: "196459333785",
  appId: "1:196459333785:web:cd77aa51752c6b3d3a9008"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const getCategoriesAndDocuments = async (path: string) => {
  const collectionRef = collection(db, path);
  const q = query(collectionRef);

  const querySnapshot = await getDocs<Record<string, ProductInterface[]>>(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    // @ts-ignore
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);
