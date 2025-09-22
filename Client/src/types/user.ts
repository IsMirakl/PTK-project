export type UserStatus = 'guest' | 'banned' | 'student' | 'admin' | 'moderator';

export interface User {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  status: UserStatus;
  registrationDate: string;
  vkId?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface VKAuthData {
  code: string;
  redirectUri: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
} 




// export interface Post {
//   id: number;
//   title: string;
//   author: User;
//   group?: Group;
//   media: Media;
//   votesCount: number;
//   comments: number;
//   voted?: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Comment {
//   id: number;
//   comment: string;
//   user: User;
//   post: {
//     id: number;
//   }
//   replies: Comment[],
//   parent?: Comment
//   votesCount?: number;
//   voted?: number;
//   createdAt: string;
//   updatedAt: string
// }