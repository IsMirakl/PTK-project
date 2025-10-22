import { api } from "../axiosConfig";

export const filesAPI = {
  getFile: async (fileId: string): Promise<Blob> => {
    const response = await api.get(`/v0/files/${fileId}`, {
      responseType: 'blob'
    });
    return response.data;
  },


  getFileUrl: (fileId: string): string => {
    const baseUrl = api || '';
    return `${baseUrl}/v0/files/${fileId}`;
  }
};