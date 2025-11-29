import { useEffect, useState } from "react"
import type { CourseDTO, CreateCourseDTO } from "../types/CourseCard"
import { courseCardApi } from "../api";

export const useCourse = () => {
    const [course, setCourse] = useState<CourseDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getMyCourses = async () => {
        setLoading(true);
        setError(null);

        try {
            const coursesData = await courseCardApi.getAllCourses();
            setCourse(coursesData);
        } catch (err) {
            setError('Ошибка загрузки курсов');
            console.error('Error fetching courses:', err);
        } finally {
            setLoading(false);
        }
    }

    const createCourse = async (courseData: CreateCourseDTO): Promise<CourseDTO> => {
        try {
            const newCourse = await courseCardApi.createCourse(courseData);
            setCourse(prev => [...prev, newCourse]);
            return newCourse;
        } catch (err) {
            setError('Ошибка создания курса');
            throw err;
        }
    }

    const enrollInCourse = async (courseId: string): Promise<boolean> => {
        try {
            // enrollInCourse
            await courseCardApi.getCourseById(courseId); // временно
            return true;
        } catch (err) {
            setError('Ошибка записи на курс');
            throw err;
        }
    }

    useEffect(() => {
        getMyCourses();
    }, []);

    const refetch = () => {
        getMyCourses();
    }

    return { 
        course,
        loading, 
        error, 
        refetch,
        createCourse,
        enrollInCourse 
    };
}