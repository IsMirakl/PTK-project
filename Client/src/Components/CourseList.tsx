import { useCourse } from "../hooks/useCourse";
import { CourseCard } from "./CourseCard";
import styles from "../styles/components/CourseList.module.css";
import { useState, useEffect } from "react";
import type { CourseDTO } from "../types/CouerseCard";

const mockCourses: CourseDTO[] = [
    {
        id: "1",
        name: "Введение в программирование",
        description: "Изучите основы программирования с нуля. Этот курс подойдет для начинающих, которые хотят освоить фундаментальные концепции программирования и научиться писать чистый код.",
        tags: ["программирование", "для начинающих", "python"],
        previewUrl: "",
        handle: "intro-to-programming",
        ageAudience: "16+",
        participantsCount: 15,
        courseType: "public"
    },
    {
        id: "2",
        name: "Веб-разработка на React",
        description: "Современная веб-разработка с использованием React.js. Изучите компонентный подход, хуки, routing и state management.",
        tags: ["react", "javascript", "веб-разработка"],
        previewUrl: "",
        handle: "react-web-development",
        ageAudience: "18+",
        participantsCount: 8,
        courseType: "private"
    },
    {
        id: "3",
        name: "Дизайн интерфейсов",
        description: "Освойте принципы UI/UX дизайна. Научитесь создавать интуитивно понятные и красивые интерфейсы для веб и мобильных приложений.",
        tags: ["дизайн", "ui/ux", "figma"],
        previewUrl: "",
        handle: "ui-ux-design",
        ageAudience: "16+",
        participantsCount: 12,
        courseType: "public"
    },
    {
        id: "4",
        name: "Мобильная разработка",
        description: "Создавайте мобильные приложения для iOS и Android. Изучите Flutter и React Native для кроссплатформенной разработки.",
        tags: ["мобильная разработка", "flutter", "react native"],
        previewUrl: "",
        handle: "mobile-development",
        ageAudience: "18+",
        participantsCount: 6,
        courseType: "public"
    },
    {
        id: "5",
        name: "Анализ данных на Python",
        description: "Научитесь работать с данными используя Python. Pandas, NumPy, визуализация данных и машинное обучение.",
        tags: ["python", "анализ данных", "машинное обучение"],
        previewUrl: "",
        handle: "data-analysis-python",
        ageAudience: "20+",
        participantsCount: 10,
        courseType: "private"
    },
    {
        id: "6",
        name: "Английский для IT",
        description: "Специализированный курс английского языка для IT-специалистов. Техническая лексика, общение с заказчиками и документация.",
        tags: ["английский", "it", "языки"],
        previewUrl: "",
        handle: "english-for-it",
        ageAudience: "16+",
        participantsCount: 20,
        courseType: "public"
    }
];

export const CourseList: React.FC = () => {
    const { course, loading, error } = useCourse();
    const [useMockData, setUseMockData] = useState(false);

    useEffect(() => {
        if (!loading && course.length === 0) {
            setUseMockData(true);
        }
    }, [course, loading]);


    const displayCourses = useMockData ? mockCourses : course;
    const displayLoading = useMockData ? false : loading;
    const displayError = useMockData ? null : error;

    if (displayLoading) {
        return <div className={styles.loading}>Загрузка курсов...</div>;
    }

    if (displayError) {
        return (
            <div className={styles.error}>
                <p>Ошибка загрузки курсов: {displayError}</p>
                <p>Показаны тестовые данные:</p>
                <div className={styles.courseList}>
                    {mockCourses.map((courseItem) => (
                        <CourseCard
                            key={courseItem.id}
                            {...courseItem}
                        />
                    ))}
                </div>
            </div>
        );
    }


    return (
        <div className={styles.courseList}>
            {displayCourses.map((courseItem) => (
                <CourseCard
                    key={courseItem.id}
                    {...courseItem}
                />
            ))}
        </div>
    );
};

export const MockCourseList: React.FC = () => {
    return (
        <div className={styles.courseList}>
            <div className={styles.mockWarning}>
                🔧 мок данные
            </div>
            {mockCourses.map((courseItem) => (
                <CourseCard
                    key={courseItem.id}
                    {...courseItem}
                />
            ))}
        </div>
    );
};