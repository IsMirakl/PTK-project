import { mockProfiles } from '../../mockData/profileData';
import type { ProfileResponseDTO, ProfileUpdateDTO } from '../../types/profile';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockProfileApi = {
  getMyProfile: async (): Promise<ProfileResponseDTO> => {
    await delay(500);
    return { ...mockProfiles[0] };
  },

  getProfileByHandle: async (handle: string): Promise<ProfileResponseDTO> => {
    await delay(300);
    const profile = mockProfiles.find(p => p.handle === handle);
    if (!profile) {
      throw new Error('Profile not found');
    }
    return { ...profile };
  },

  updateAvatar: async (file: File): Promise<ProfileResponseDTO> => {
    await delay(800);
    const avatarUrl = URL.createObjectURL(file);
    const myProfile = { ...mockProfiles[0], avatar: avatarUrl };
    return myProfile;
  },

  updateProfile: async (data: ProfileUpdateDTO): Promise<ProfileUpdateDTO> => {
    await delay(400);
    return data;
  }
};