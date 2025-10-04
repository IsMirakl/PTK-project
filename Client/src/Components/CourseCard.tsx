import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";
import type { CourseCardProps } from "../types/CouerseCard";

export const CourseCard: React.FC<CourseCardProps> = ({title, tags, description, imageUrl, data, authorName, subscribedCount, periodCourse, authorImgUrl}) => {
    return (
        <div className={styles.cardContainer}>
            <img src={imageUrl} alt="Image Course" />
            <div className={styles.bodyCard}>
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
                <p>{data}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    <img src="icon" alt="" />{periodCourse}
                    <p><img src="" alt="" />{subscribedCount}</p>
                </div>
                <Link to="">
                <img src={authorImgUrl} alt="" />
                {authorName}
                </Link>
            </div>
            <button>Записаться</button>
        </div>
    )
}