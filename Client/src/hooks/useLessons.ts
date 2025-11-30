import { useState } from 'react';
import { lessonApi } from '../api/endpoints/lesson';
import type { CreateLessonDTO, LessonDTO } from '../types/lesson';

export const useLesson = () => {
  const [lesson, setLesson] = useState<LessonDTO | null>(null);
  const [lessons, setLessons] = useState<LessonDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getLessonById = async (lessonId: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const lessonData = await lessonApi.getLessonById(lessonId);
      setLesson(lessonData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Ошибка загрузки урока';
      setError(errorMessage);
      setLesson(null);
    } finally {
      setLoading(false);
    }
  };

  const createLesson = async (
    courseId: string,
    lessonData: CreateLessonDTO
  ): Promise<LessonDTO> => {
    setLoading(true);
    setError(null);

    try {
      const newLesson = await lessonApi.createLesson(courseId, lessonData);
      setLessons(prev => [...prev, newLesson]);
      return newLesson;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Ошибка создания урока';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCourseLessons = async (courseId: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const lessonsData = await lessonApi.getCourseLessons(courseId);
      setLessons(lessonsData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Ошибка загрузки уроков курса';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteLesson = async (lessonId: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      await lessonApi.deleteLesson(lessonId);
      setLessons(prev => prev.filter(lesson => lesson.id !== lessonId));
      if (lesson?.id === lessonId) {
        setLesson(null);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Ошибка удаления урока';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const clearError = (): void => setError(null);
  const clearLesson = (): void => setLesson(null);

  return {
    lesson,
    lessons,
    loading,
    error,

    getLessonById,
    createLesson,
    getCourseLessons,
    deleteLesson,
    clearError,
    clearLesson,
  };
};
