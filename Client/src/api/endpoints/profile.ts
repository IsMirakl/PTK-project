import { api } from "../axiosConfig";
import type { ProfileResponseDTO, ProfileUpdateDTO } from "../../types/profile";

export const profileApi  = {
    getMyProfile: async (): Promise<ProfileResponseDTO> => {
        const response = await api.get('/v0/profile');
        return response.data;
    },
    getProfileByHandle: async (handle: string): Promise<ProfileResponseDTO> => {
        const response = await api.get(`/v0/profile/${handle}`);
        return response.data;
    },
    updateAvatar: async (file: File): Promise<ProfileResponseDTO> => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await api.post('/v0/profile/avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },
    updateProfile: async (data: ProfileUpdateDTO): Promise<ProfileUpdateDTO> => {
        const response = await api.put('/v0/profile', data);
        return response.data;
    }
};