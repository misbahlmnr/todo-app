import { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

export default function ProfileContent() {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h1>Profile Content</h1>
      <div>{profile}</div>
    </div>
  );
}
