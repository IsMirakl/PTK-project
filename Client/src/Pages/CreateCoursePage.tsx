import { useState } from "react";
import Header from "../Components/Header";
import styles from '../styles/pages/CreateCoursePage.module.css';
import imageCourse from '../assets/image/image_course.svg';
import { useCreateCourse } from "../hooks/useCreateCourse";
import Footer from "../Components/Footer";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCoursePage: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [previewFile, setPreviewFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [tagInput, setTagInput] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [ageAudience, setAgeAudience] = useState("");
    const [participantsCount, setParticipantsCount] = useState(0);
    const [courseType, setCourseType] = useState<"private" | "public">("private");

    const { createCourse, isLoading } = useCreateCourse();

    const handleLoadPreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPreviewFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!title.trim()) {
            toast.error("Введите название курса");
            return;
        }

        if (!description.trim()) {
            toast.error("Введите описание курса");
            return;
        }

        if (description.trim().length < 10) {
            toast.error("Описание должно содержать минимум 10 символов");
            return;
        }

        try {
            const courseData = {
                name: title.trim(),
                description: description.trim(),
                tags: tags,
                ageAudience: ageAudience,
                participantsCount: participantsCount,
                courseType: courseType
            };

            await createCourse(courseData, previewFile || undefined);
            

            setTitle("");
            setDescription("");
            setPreviewFile(null);
            setPreviewUrl("");
            setTagInput("");
            setTags([]);
            setAgeAudience("");
            setParticipantsCount(0);
            setCourseType("private");

            toast.success("Курс успешно создан!");
            
        } catch (err) {
            console.error("Ошибка создания курса:", err);
            toast.error("Произошла ошибка при создании курса");
        }
    };

    const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            const newTag = tagInput.trim();
            if (!tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleParticipantsSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParticipantsCount(parseInt(e.target.value));
    };

    const handleCourseTypeChange = (type: "private" | "public") => {
        setCourseType(type);
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
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
                                <input
                                    type="file"
                                    id="previewUpload"
                                    accept="image/*"
                                    onChange={handleLoadPreview}
                                    className={styles.fileInput}
                                    disabled={isLoading}
                                />
                            </div>

                            <label htmlFor="titleCourse">Название курса</label>
                            <input 
                                type="text" 
                                id="titleCourse" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Введите название курса"
                                className={styles.titleInput}
                                disabled={isLoading}
                            />

                            <label htmlFor="descriptionCourse">Описание курса</label>
                            <textarea 
                                id="descriptionCourse" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Введите описание курса"
                                className={styles.descriptionInput}
                                disabled={isLoading}
                                rows={4}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.visitorsInfo}>
                        <div className={styles.inputsFields}>
                            <p>Информация для посетителей</p>

                            <label htmlFor="tagsCourse">Теги курса</label>
                            <div className={styles.tagsContainer}>
                                <div className={styles.tagsList}>
                                    {tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tag}
                                            <button 
                                                type="button"
                                                onClick={() => handleRemoveTag(tag)}
                                                className={styles.tagRemove}
                                                disabled={isLoading}
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <input 
                                    type="text" 
                                    id="tagsCourse" 
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={handleTagInputKeyDown}
                                    placeholder="Введите тег и нажмите Enter"
                                    className={styles.titleInput}
                                    disabled={isLoading}
                                />
                            </div>

                            <label htmlFor="categoryCourse">Возрастная категория</label>
                            <input 
                                type="text" 
                                id="categoryCourse" 
                                value={ageAudience}
                                onChange={(e) => setAgeAudience(e.target.value)}
                                placeholder="Выберите возрастную категорию"
                                className={styles.titleInput}
                                disabled={isLoading}
                            />
                        </div>
                        <div className={styles.participantsSection}>
                            <div className={styles.participantsControl}>    
                                <label htmlFor="countUsers">Количество участников</label>
                                <span className={styles.participantsValue}>{participantsCount}</span>
                            </div>
                            <input 
                                type="range" 
                                min={0} 
                                max={20} 
                                value={participantsCount}
                                onChange={handleParticipantsSliderChange}
                                id="countUsersSlider"
                                className={styles.participantsSlider}
                                disabled={isLoading}
                            />
                        </div>
                        
                        <div className={styles.typeCourse}>
                            <p>Тип курса</p>
                            <div className={styles.changeType}>
                                <button 
                                    type="button"
                                    className={`${styles.typeButton} ${courseType === 'private' ? styles.typeButtonActive : ''}`}
                                    onClick={() => handleCourseTypeChange('private')}
                                    disabled={isLoading}
                                >
                                    Приватный
                                </button>
                                <button 
                                    type="button"
                                    className={`${styles.typeButton} ${courseType === 'public' ? styles.typeButtonActive : ''}`}
                                    onClick={() => handleCourseTypeChange('public')}
                                    disabled={isLoading}
                                >
                                    Публичный
                                </button>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className={styles.publishCourse}
                        disabled={isLoading}
                    >
                        {isLoading ? "Создание..." : "Опубликовать курс"}
                    </button>
                </form>
            </div>

            <ToastContainer
                position="bottom-left"
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
            
            <Footer/>
        </>
    );
};

export default CreateCoursePage;