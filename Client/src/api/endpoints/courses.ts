import type { CourseDTO, CreateCourseDTO } from "../../types/CouerseCard";
import { api } from "../axiosConfig";



export const courseCardApi = {
  getAllCourses: async (): Promise<CourseDTO[]> => {
    const response = await api.get('/v0/course');
    return response.data;
  },

  createCourse: async (courseDate: CreateCourseDTO, preview?: File): Promise<CourseDTO> => {
    const formData = new FormData();

    formData.append('course', new Blob([JSON.stringify(courseDate)], {
      type: 'application/json'
    }));
    
    if(preview){
      formData.append('preview', preview)
    }
    const response = await api.post('/v0/course', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  getCourseById: async (id: string): Promise<CourseDTO> => {
    const response = await api.get(`/v0/course/id/${id}`);
    return response.data;
  },


  getCourseByHandle: async (handle: string): Promise<CourseDTO> => {
    const response = await api.get(`/v0/course/handle/${handle}`);
    return response.data;
  },
  
  updateCoursePreview: async (id: string, file:File): Promise<CourseDTO> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.patch(`/v0/course/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/v0/course/${id}`);
  }
};