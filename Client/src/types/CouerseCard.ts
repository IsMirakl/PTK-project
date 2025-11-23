export interface CourseDTO {
    id: string;
    name: string;
    tags: string[];
    description: string;
    previewUrl: string;
    handle: string;
    ageAudience?: string;
    participantsCount?: number;
    courseType?: "private" | "public";
}

export interface CreateCourseDTO {
    name: string;
    description: string;
    tags: string[];
    ageAudience?: string;
    participantsCount?: number;
    courseType?: "private" | "public";
}