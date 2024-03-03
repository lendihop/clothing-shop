import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';

import { User } from 'firebase/auth';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from 'utils/firebase.utils';

interface UserContextInterface {
  currentUser: User | null;
  setCurrentUser: (value: User | null) => void;
}

export const UserContext = createContext<UserContextInterface>({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
