export type UserStatus = 'guest' | 'banned' | 'Студент' | 'admin' | 'moderator';

export interface User {
  id: number,
  fullName: string;
  avatarUrl?: string;
  email: string;
  status: UserStatus;
  handle: string;
  registrationDate: string;
  course?: number;
  numberGroup?: string;
  numberPhone?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}