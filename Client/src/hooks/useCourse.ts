import { useEffect, useState } from "react"
import type { CourseCardProps } from "../types/CouerseCard"
import { courseCardApi } from "../services/api";

export const useCourse = () => {
    const [course, setCourse] = useState<CourseCardProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string| null>(null);
    

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await courseCardApi.getAllCourses();
                setCourse(data);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('ошибка загрузки курв');
            } finally {
                setLoading(false);
            }
        };


        fetchCourse();
    }, [])

    return {course, loading, error};
}
