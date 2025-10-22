import type { CreateLessonDTO, LessonDTO } from "../../types/lesson";
import { api } from "../axiosConfig";

export const lessonApi = {
    createLesson: async (courseId: string, data: CreateLessonDTO): Promise<LessonDTO> => {
        const response = await api.post(`/v0/lessons/${courseId}`, data);
        return response.data;
    },
    getLessonById: async (lessonId: string): Promise<LessonDTO> => {
        const response = await api.get(`/v0/lessons/${lessonId}`);
        return response.data;
    },
    getCourseLessons: async (courseId: string): Promise<LessonDTO> => {
        const response = await api.get(`/v0/lessons/course/${courseId}`);
        return response.data;
    },
    deleteLesson: async (lessonId: string): Promise<void> => {
        await api.delete(`/v0/lessons/${lessonId}`);
    }
}