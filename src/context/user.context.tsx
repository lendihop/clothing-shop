import {createContext, FC, PropsWithChildren, useState} from "react";
import {User} from "firebase/auth";

interface UserContextType {
  currentUser: User | null,
  setCurrentUser: (value: User | null) => void,
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
