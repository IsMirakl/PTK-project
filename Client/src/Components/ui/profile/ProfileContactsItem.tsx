import StatusSt from '../../../assets/icons/status_student.svg';
import styles from '../../../styles/pages/ProfilePage.module.css';
import type { ProfileResponseDTO } from '../../../types/profile';

interface ProfileContacts {
  profile: ProfileResponseDTO;
}

export const ProfileContactsItem = ({ profile }: ProfileContacts) => {
  return (
    <div className={styles.profileInfo}>
      <p className={styles.profileInfoTitle}>Контактная информация</p>
      <hr />

      <div className={styles.profileContacts}>
        <div className={styles.profileEmail}>
          <div className={styles.profileContactsIcon}>
            <img src={StatusSt} alt="" />
          </div>
          <div className={styles.emailTextWrapper}>
            <p>Email</p>
            <p>{profile.email}</p>
          </div>
        </div>

        <div className={styles.profilePhone}>
          <div className={styles.profileContactsIcon}>
            <img src={StatusSt} alt="" />
          </div>
          <div className={styles.phoneTextWrapper}>
            <p>Телефон</p>
            <p>{profile.numberPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
