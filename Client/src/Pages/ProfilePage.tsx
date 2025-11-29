import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import Header from '../Components/Header';

import IconBook from "../assets/icons/book.svg";
import styles from "../styles/pages/ProfilePage.module.css";
import { ProfileHeader } from '../Components/profile/ProfileHeader';
import { ProfileContactsItem } from '../Components/profile/ProfileContactsItem';
import { CourseList } from '../Components/CourseList';
import Footer from '../Components/Footer';


export const ProfilePage = () => {
  const { handle } = useParams<{ handle: string }>();
  const { profile, loading, error, getProfileByHandle, getMyProfile } = useProfile();
  const [isMyProfile, setIsMyProfile] = useState(false);
  

  useEffect(() => {
    if (handle) {
      setIsMyProfile(false);
      getProfileByHandle(handle);
    } else {
      setIsMyProfile(true);
      getMyProfile();
    }
  }, [handle, getProfileByHandle, getMyProfile]);

  if (loading) return (
    <div className="loading">
      <div>Загрузка профиля...</div>
    </div>
  );

  if (error) return (
    <div className="error">
      <div>Ошибка: {error}</div>
    </div>
  );

  if (!profile) return null;

 return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileCard}>
         <ProfileHeader profile={profile} isMyProfile={isMyProfile}/>
          

           <ProfileContactsItem profile={profile}/>

        </div>
        <div className={styles.coursesAttendTitle}>
          <div className={styles.courseAttendIcon}>
          <img src={IconBook}/>
          </div>
          <h3>Курсы, которые я посещаю</h3>
        </div>
        <div className={styles.profileMyCourse}>
          <CourseList limit={3} showLoadMore={false}/>
        </div>
      </div>

      <Footer />
    </>
  );
};