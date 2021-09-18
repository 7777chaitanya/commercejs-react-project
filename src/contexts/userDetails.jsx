
import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../src/components/firebase";

export const CurrentUserDetailsContext = createContext();

export const CurrentUserDetailsProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [currentUserDoc, setCurrentUserDoc] = useState({});

  useEffect(async () => {
    if (currentUser) {
      const docRef = doc(db, "customerDetails", currentUser.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setCurrentUserDoc(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }, []);

  return (
    <CurrentUserDetailsContext.Provider
      value={[currentUserDoc, setCurrentUserDoc]}
    >
      {children}
    </CurrentUserDetailsContext.Provider>
  );
};