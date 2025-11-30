import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { CourseMainInfo } from '../Components/ui/course/CourseMainInfo';
import { CourseVisitorsInfo } from '../Components/ui/course/CourseVisitorsInfo';
import { CourseButton } from '../Components/ui/forms/CourseButton';
import { useCreateCourse } from '../hooks/useCreateCourse';
import styles from '../styles/pages/CreateCoursePage.module.css';

const CreateCoursePage: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [ageAudience, setAgeAudience] = useState('');
  const [participantsCount, setParticipantsCount] = useState(0);
  const [courseType, setCourseType] = useState<'private' | 'public'>('private');

  const { createCourse, isLoading } = useCreateCourse();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error('Введите название курса');
      return;
    }

    if (!description.trim()) {
      toast.error('Введите описание курса');
      return;
    }

    if (description.trim().length < 10) {
      toast.error('Описание должно содержать минимум 10 символов');
      return;
    }

    try {
      const courseData = {
        name: name.trim(),
        description: description.trim(),
        tags: tags,
        ageAudience: ageAudience,
        participantsCount: participantsCount,
        courseType: courseType,
      };

      await createCourse(courseData, previewFile || undefined);

      setName('');
      setDescription('');
      setPreviewFile(null);
      setPreviewUrl('');
      setTagInput('');
      setTags([]);
      setAgeAudience('');
      setParticipantsCount(0);
      setCourseType('private');

      toast.success('Курс успешно создан!');
    } catch (err) {
      console.error('Ошибка создания курса:', err);
      toast.error('Произошла ошибка при создании курса');
    }
  };

  const handleTagAdd = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handlePreviewChange = (file: File | null, url: string) => {
    setPreviewFile(file);
    setPreviewUrl(url);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <CourseMainInfo
            name={name}
            description={description}
            previewUrl={previewUrl}
            isLoading={isLoading}
            onNameChange={setName}
            onDescriptionChange={setDescription}
            onPreviewChange={handlePreviewChange}
          />

          <CourseVisitorsInfo
            tagInput={tagInput}
            tags={tags}
            participantsCount={participantsCount}
            courseType={courseType}
            isLoading={isLoading}
            onTagInputChange={setTagInput}
            onTagAdd={handleTagAdd}
            onTagRemove={tag => setTags(tags.filter(t => t !== tag))}
            onParticipantsChange={setParticipantsCount}
            onCourseTypeChange={setCourseType}
          />

          <CourseButton
            type="submit"
            className={styles.publishCourse}
            disabled={isLoading}
          >
            {isLoading ? 'Создание' : 'Опубликовать курс'}
          </CourseButton>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Footer />
    </>
  );
};

export default CreateCoursePage;
