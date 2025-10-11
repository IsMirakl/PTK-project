import { CourseCard } from "../Components/CourseCard";
import Header from "../Components/Header";
import { useAuth } from "../hooks/useAuth";
import { mockCourses } from "../mockData/courseCard";

const MyCoursesPage: React.FC = () => {
    const { user, isLoading, isInitialized } = useAuth();

    const getFirstName = (fullName?: string): string => {
        if (!fullName) return 'Гость';
        const parts = fullName.split(' ');
        return parts[1] || parts[0] || 'Гость';
    };
    
    if (!isInitialized || isLoading) {
        return <div>Загрузка...</div>;
    }
    
    const firstName = getFirstName(user?.fullName);

    const courses = mockCourses;


    return(
        <>
        <Header />
        <div>
            <h1>Добро пожаловать, {firstName}!</h1>
        </div>

        <div>
        {courses.map(course => (
        <CourseCard 
          key={course.id}
          {...course}
        />
      ))}
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default MyCoursesPage;




    // const {course, loading, error} = useCourse();
    
    // if (loading) {
    //     return (
    //     <div className="loadingContainer">
    //      <div className="spinner"></div>
    //     <p>Загружаем список курсов...</p>
    //   </div>
    //  );
    // }
    // if (error) {
    //     return (
    //     <div className="errorContainer">
    //         <h3>Не удалось загрузить курсы</h3>
    //         <p>Ошибка: {error}</p>
    //         <button onClick={() => window.location.reload()}>
    //       Попробовать снова
    //       </button>
    //   </div> 
    //  );
