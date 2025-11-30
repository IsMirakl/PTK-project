import StatusSt from '../../../assets/icons/status_student.svg';
import Logotype from '../../../assets/logo/Logotype.svg';
import styles from '../../../styles/pages/ProfilePage.module.css';
import type { ProfileResponseDTO } from '../../../types/profile';

interface ProfileHeaderProps {
  profile: ProfileResponseDTO;
  isMyProfile: boolean;
  onEdit?: () => void;
}

export const ProfileHeader = ({
  profile,
  isMyProfile,
  onEdit,
}: ProfileHeaderProps) => {
  return (
    <div className={styles.profileHeader}>
      <img
        src={profile.avatarUrl || Logotype}
        alt={`Аватар ${profile.fullName}`}
        className={styles.profileAvatar}
      />
      <div className={styles.profileText}>
        <p className={styles.profileName}>{profile.fullName}</p>

        <div className={styles.profileStatus}>
          <img src={StatusSt} alt="Статус" />
          {profile.status}
        </div>

        <div className={styles.profileCourseGroup}>
          <div className={styles.profileCourse}>{profile.course} курс</div>
          <div className={styles.profileNumberGroup}>{profile.numberGroup}</div>
        </div>
      </div>

      {isMyProfile && (
        <div className={styles.profileEdit}>
          <button onClick={onEdit}>Редактировать</button>
        </div>
      )}
    </div>
  );
};
