import { useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { CourseList } from "../Components/CourseList";
import styles from '../styles/pages/CoursesPage.module.css';

const CoursesPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'Все направления' },
        { id: 'it', label: 'IT и программирование' },
        { id: 'design', label: 'Дизайн' },
        { id: 'languages', label: 'Языки' },
        { id: 'music', label: 'Музыка' },
        { id: 'sports', label: 'Спорт' }
    ];

    
    return (
        <>
            <Header />
            <div className={styles.coursesFilter}>
                {filters.map((filter) => (
                    <button 
                        key={filter.id} 
                        className={`${styles.filterButton} ${
                            activeFilter === filter.id ? styles.filterButtonActive : ''
                        }`}
                        onClick={() => setActiveFilter(filter.id)}
                        type="button"
                        aria-pressed={activeFilter === filter.id}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
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