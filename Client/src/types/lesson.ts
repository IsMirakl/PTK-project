export type LessonState = 'PLANNED' 
| 'ONGOING' 
| 'CANCELLED'
| 'FINISHED';

export interface LessonDTO {
    id: string;
    name: string;
    description: string;
    beginAt: string;
    endsAt: string;
    state: LessonState;
    courseId: string;
}

export interface CreateLessonDTO {
    name: string;
    description: string;
    beginAt: string;
    endsAt: string;
}
