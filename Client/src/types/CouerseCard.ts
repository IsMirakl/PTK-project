export interface CourseDTO {
    id: string;
    name: string;
    tags: string[];
    description: string;
    previewUrl: string;
    handle: string;
}

export interface CreateCourseDTO {
    name: string;
    desciption: string;
    tags: string[];
}