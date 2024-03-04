import { User } from 'firebase/auth';

export interface UserStore {
  currentUser: User | null;
  setCurrentUser: (value: User | null) => void;
}
