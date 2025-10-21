import type { CourseCardProps } from "../../types/CouerseCard";
import { api } from "../axiosConfig";



export const courseCardApi = {
  getAllCourses: async (): Promise<CourseCardProps[]> => {
    const response = await api.get('/course');
    return response.data;
  },

  getCourseById: async (id: string): Promise<CourseCardProps> => {
    const response = await api.get(`/course/${id}`);
    return response.data;
  },

  createCourse: async (data: {
    name: string,
    description: string,
    tags: string[],
  }): Promise<CourseCardProps> => {
    const response = await api.post('/course', data);
    return response.data;
  },

  updateCourse: async (id: string, data: Partial<CourseCardProps>): Promise<CourseCardProps> => {
    const response = await api.patch(`/course/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/course/${id}`);
  }
};