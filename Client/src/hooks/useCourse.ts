/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import type { CourseDTO  } from "../types/CouerseCard"
import { courseCardApi } from '../api';

export const useCourse = () => {
    const [course, setCourse] = useState<CourseDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string| null>(null);
    

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await courseCardApi.getAllCourses();
                setCourse(data);
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
