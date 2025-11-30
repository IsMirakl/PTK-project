export type LessonState = 'PLANNED' 
| 'ONGOING' 
| 'CANCELLED'
| 'FINISHED';

export interface LessonDTO {
    id: string;
    name: string;
    description: string;
    beginAt: Date;
    endsAt: Date;
    state: LessonState;
    courseId: string;
}

export interface CreateLessonDTO {
    name: string;
    description: string;
    beginAt: Date;
    endsAt: Date;
}
