import { useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from '../styles/pages/CourseDetailsPage.module.css';
import { useCourse } from "../hooks/useCourse";
import { useState, useEffect } from "react";
import type { CourseDTO } from "../types/CourseCard";

const CourseDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { course } = useCourse();
    const [currentCourse, setCurrentCourse] = useState<CourseDTO | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id && course.length > 0) {
            const foundCourse = course.find(c => c.id === id);
            setCurrentCourse(foundCourse || null);
            setLoading(false);
        }
    }, [id, course]);

    if (loading) {
        return (
            <>
                <Header />
                <div className={styles.loading}>Загрузка курса...</div>
                <Footer />
            </>
        );
    }

    if (!currentCourse) {
        return (
            <>
                <Header />
                <div className={styles.notFound}>
                    <h2>Курс не найден</h2>
                    <Link to="/courses" className={styles.backButton}>
                        Вернуться к курсам
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <nav className={styles.breadcrumbs}>
                    <Link to="/">Главная</Link>
                    <span> / </span>
                    <Link to="/courses">Курсы</Link>
                    <span> / </span>
                    <span>{currentCourse.name}</span>
                </nav>

                <div className={styles.courseHeader}>
                    <div className={styles.previewSection}>
                        <img 
                            src={currentCourse.previewUrl} 
                            alt={currentCourse.name}
                            className={styles.courseImage}
                        />
                    </div>
                    
                    <div className={styles.infoSection}>
                        <div className={styles.tags}>
                            {currentCourse.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <h1 className={styles.courseTitle}>{currentCourse.name}</h1>
                        <p className={styles.courseDescription}>{currentCourse.description}</p>
                        
                        <div className={styles.metaInfo}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Возраст:</span>
                                <span className={styles.metaValue}>{currentCourse.ageAudience}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Участников:</span>
                                <span className={styles.metaValue}>{currentCourse.participantsCount}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Тип:</span>
                                <span className={styles.metaValue}>
                                    {currentCourse.courseType === 'private' ? 'Приватный' : 'Публичный'}
                                </span>
                            </div>
                        </div>
                        
                        <div className={styles.actions}>
                            <button className={styles.enrollButton}>
                                Записаться на курс
                            </button>
                            <button className={styles.favoriteButton}>
                                ❤️ Добавить в избранное
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.detailsSection}>
                    <div className={styles.tabs}>
                        <button className={`${styles.tab} ${styles.tabActive}`}>О курсе</button>
                        <button className={styles.tab}>Программа</button>
                        <button className={styles.tab}>Преподаватели</button>
                        <button className={styles.tab}>Отзывы</button>
                    </div>
                    
                    <div className={styles.tabContent}>
                        <h3>Описание курса</h3>
                        <p>Подробное описание курса {currentCourse.name}. Здесь будет размещена полная информация о том, что изучается в курсе, какие навыки получают студенты и какие проекты они реализуют.</p>
                        
                        <h3>Что вы узнаете</h3>
                        <ul className={styles.learnList}>
                            <li>Основные концепции и принципы</li>
                            <li>Практические навыки и техники</li>
                            <li>Работу с инструментами и технологиями</li>
                            <li>Решение реальных задач</li>
                        </ul>
                        
                        <h3>Для кого этот курс</h3>
                        <p>Курс подойдет для {currentCourse.ageAudience}, которые хотят освоить новые навыки и развить свои способности.</p>
                    </div>
                </div>

                {/* Похожие курсы */}
                <div className={styles.relatedCourses}>
                    <h2>Похожие курсы</h2>
                    <div className={styles.relatedList}>
                        {/* Здесь можно добавить компонент RelatedCourseCard */}
                        <div className={styles.relatedPlaceholder}>
                            Будут показаны похожие курсы
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CourseDetailsPage;