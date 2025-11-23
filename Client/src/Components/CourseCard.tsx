import styles from "../styles/components/Card.module.css";
import type { CourseDTO } from "../types/CouerseCard";
import defaultImg from "../assets/image/2.jpg";

export const CourseCard: React.FC<CourseDTO> = ({ 
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
                <button className={styles.cardButton}>Записаться</button>
            </div>
        </div>
    );
}