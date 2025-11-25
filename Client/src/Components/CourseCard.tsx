import styles from "../styles/components/Card.module.css";
import type { CourseDTO } from "../types/CouerseCard";
import defaultImg from "../assets/image/2.jpg";
import { Link } from "react-router-dom";

export const CourseCard: React.FC<CourseDTO> = ({ 
    id,
    name, 
    tags, 
    description, 
    previewUrl 
}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img 
                    src={previewUrl || defaultImg} 
                    alt={name} 
                    className={styles.cardImage}
                />
            </div>
            
            <div className={styles.bodyCard}>
                <div className={styles.tagsWrapper}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tagContainer}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className={styles.cardTitle}>{name}</h2>
                <p className={styles.cardDescription}>{description}</p>
            </div>
            
            <div className={styles.buttonContainer}>
                <Link to={`/course/${id}`} className={styles.cardButton}>
    Записаться
</Link>
            </div>
        </div>
    );
}