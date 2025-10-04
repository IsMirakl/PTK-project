import Header from "../Components/Header";
import { useAuth } from "../hooks/useAuth";

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

    return(
        <>
        <Header />
        <div>
            <h1>Добро пожаловать, {firstName}!</h1>
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default MyCoursesPage;