export interface CourseCardProps {
    id: string;
    title: string;
    tags: string[];
    description: string;
    imageUrl?: string;
    data?: string;
    authorName?: string;
    authorImgUrl?: string;
    subscribedCount?: number;
    periodCourse?: string;
}