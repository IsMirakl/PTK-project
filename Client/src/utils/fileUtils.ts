import { api } from '../api';
import type { CourseDTO } from '../types/CourseCard';
import type { ProfileResponseDTO } from '../types/profile';

export const getFileUrl = (fileUrl?: string): string | null => {
  if (!fileUrl) {
    return null;
  }

  if (fileUrl.startsWith('http')) {
    return fileUrl;
  }

  if (fileUrl.startsWith('/')) {
    const baseUrl = api || '';
    return `${baseUrl}${fileUrl}`;
  }
  return fileUrl;
};

export const getAvatarUrl = (profile: ProfileResponseDTO): string | null => {
  return getFileUrl(profile.avatarUrl);
};

export const getCoursePreviewUrl = (course: CourseDTO): string | null => {
  return getFileUrl(course.previewUrl);
};
