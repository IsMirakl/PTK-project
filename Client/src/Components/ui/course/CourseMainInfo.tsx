import imageCourse from '../../../assets/image/image_course.svg';
import styles from '../../../styles/pages/CreateCoursePage.module.css';
import { CourseFormInput } from '../forms/CourseForm';

interface CourseMainInfoProps {
  name: string;
  description: string;
  previewUrl: string;
  isLoading: boolean;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onPreviewChange: (file: File | null, url: string) => void;
}

export const CourseMainInfo = ({
  name,
  description,
  previewUrl,
  isLoading,
  onNameChange,
  onDescriptionChange,
  onPreviewChange,
}: CourseMainInfoProps) => {
  const handleLoadPreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onPreviewChange(file, url);
    }
  };

  return (
    <div className={styles.mainInfo}>
      <div className={styles.inputsFields}>
        <p>Основная информация</p>

        <div className={styles.previewCourse}>
          <label htmlFor="previewUpload" className={styles.previewLabel}>
            <img
              src={previewUrl || imageCourse}
              alt="Превью курса"
              className={styles.previewImage}
            />
          </label>

          <CourseFormInput
            type="file"
            id="previewUpload"
            accept="image/*"
            onInputChange={handleLoadPreview}
            className={styles.fileInput}
            disabled={isLoading}
          />
        </div>

        <label htmlFor="nameCourse">Название курса</label>
        <CourseFormInput
          type="text"
          id="nameCourse"
          value={name}
          onInputChange={e => onNameChange(e.target.value)}
          placeholder="Введите название курса"
          className={styles.titleInput}
          disabled={isLoading}
        />

        <label htmlFor="descriptionCourse">Описание курса</label>
        <CourseFormInput
          id="descriptionCourse"
          value={description}
          onTextareaChange={e => onDescriptionChange(e.target.value)}
          placeholder="Введите описание курса"
          className={styles.descriptionInput}
          disabled={isLoading}
          rows={4}
          as="textarea"
        />
      </div>
    </div>
  );
};
