import type { ProfileResponseDTO } from '../types/profile';

export const mockProfiles: ProfileResponseDTO[] = [
  {
    id: '1',
    fullName: 'Иванов Иван Иванович',
    summary: 'Frontend разработчик',
    handle: "danyacheat", 
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    status: 'Студент',
    course: 3,
    numberGroup: "3993",
    email: "test@mail.com",
    numberPhone: "+7 (921) 123-45-67"
},
{
    id: '2',
    fullName: 'Admin',
    summary: 'swswsw разработчик',
    handle: "test", 
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    status: 'Студент',
    course: 3,
    numberGroup: "0005",
    email: "test2@mail.com",
    numberPhone: "+7 (921) 123-45-67"
},
]