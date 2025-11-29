import type { UserStatus } from "./user";

export interface ProfileResponseDTO {
    id: string;
    fullName: string;
    summary: string;
    handle: string;
    avatarUrl?: string;
    status: UserStatus; 
    course?: number;
    numberGroup?: string;
    email: string;
    numberPhone?: string;
}

export interface ProfileUpdateDTO {
    fullname: string;
    summary: string;
    handle: string;
}