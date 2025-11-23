import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { CourseList } from "../Components/CourseList";
import styles from '../styles/pages/CoursesPage.module.css';

const CoursesPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    
                </div>
                <CourseList />
            </div>
            <Footer />
        </>
    );
};

export default CoursesPage;