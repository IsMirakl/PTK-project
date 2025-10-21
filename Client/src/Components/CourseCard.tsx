import styles from "../styles/components/Card.module.css";
import type { CourseCardProps } from "../types/CouerseCard";
import img from "../assets/image/2.jpg"

export const CourseCard: React.FC<CourseCardProps> = ({title, tags, description}) => {
    return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={img} alt="" />
      </div>
      <div className={styles.bodyCard}>
        <div className={styles.tagsWrapper}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tagContainer}>{tag}</span>
          ))}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cardButoon}>Подбронее</button>
        </div>
    </div>
    );
}


// <div className={styles.cardContainer}>
//     <img src={imageUrl} alt="Image Course" />
//     <div className={styles.bodyCard}>
//         {tags.map((tag, index) => (
//             <span key={index}>{tag}</span>
//         ))}
//         <p>{data}</p>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <div>
//             <img src="icon" alt="" />{periodCourse}
//             <p><img src="" alt="" />{subscribedCount}</p>
//         </div>
//         <Link to="">
//         <img src={authorImgUrl} alt="" />
//         {authorName}
//         </Link>
//     </div>
//     <button>Записаться</button>
// </div>