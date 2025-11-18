export type UserStatus = 'guest' | 'banned' | 'student' | 'admin' | 'moderator';

export interface User {
  id: number,
  fullName: string;
  email: string;
  status: UserStatus;
  registrationDate: string;
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