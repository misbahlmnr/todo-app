import ProfileContent from './ProfileContent';
import { ProfileContext } from './ProfileContext';

export default function ProfileApp() {
  return (
    <ProfileContext.Provider value="Misbah">
      <ProfileContent />
    </ProfileContext.Provider>
  );
}
