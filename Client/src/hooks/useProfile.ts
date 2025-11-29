import { useState, useCallback } from "react";
// import {profileApi} from "../api/endpoints/profile";
import type { ProfileResponseDTO, ProfileUpdateDTO } from "../types/profile";

import { mockProfileApi } from '../api/mockApi/mockProfileApi';
// import { profileApi } from '../api/profile';

export const useProfile = () => {
    const [profile, setProfile] = useState<ProfileResponseDTO | null>()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>();

    const getMyProfile = useCallback(async ()  => {
        setLoading(true);
        setError(null);

        try {
            const data = await mockProfileApi.getMyProfile();
            setProfile(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Ошибка загрузки профиля";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getProfileByHandle = useCallback(async (handle: string) => {
        setLoading(true);
        setError(null);

        try {
            const data = await mockProfileApi.getProfileByHandle(handle);
            setProfile(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Ошибка загрузки профиля";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateAvatar = useCallback(async (file: File) => {
        setLoading(true);
        setError(null);

        try {
            const data = await mockProfileApi.updateAvatar(file);
            setProfile(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Ошибка обновления аватарки";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }

    }, []);

    const updateProfile = useCallback(async (data: ProfileUpdateDTO) => {
        setLoading(true);
        setError(null);

        try {
            const updateProfile = await mockProfileApi.updateProfile(data);
            setProfile(prev => prev ? {...prev, ...updateProfile} : null);
            return updateProfile;
        } catch (err) {
            const message  = err instanceof Error ? err.message : "Ошибка обновления профиля";
            setError(message);
        } finally {
            setLoading(false);
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

   
  return {
    profile,
    loading,
    error,
    getMyProfile,
    getProfileByHandle,
    updateAvatar,
    updateProfile,
    clearError,
  };
}