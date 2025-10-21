import styles from "../styles/components/Card.module.css";
import type { CourseCardProps } from "../types/CouerseCard";
import img from "../assets/image/2.jpg"

export const CourseCard: React.FC<CourseCardProps> = ({title, tags, description}) => {
    return (
    <div className={styles.cardContainer}>
<<<<<<< HEAD
      <div className={styles.imageContainer}>
        <img src={img} alt="" />
      </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <div className={styles.imageContainer}>
        <img src={img} alt="" />
      </div>
>>>>>>> 9f362be (fix(Course Card Component): Исправлен недочет с неккоректным контейниром карточки)
=======
      <div className={styles.imageContainer}>
        <img src={img} alt="" />
      </div>
>>>>>>> 9f362be (fix(Course Card Component): Исправлен недочет с неккоректным контейниром карточки)
>>>>>>> 9c7b9bfb327eac80db312fd463d5ddae94cac709
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