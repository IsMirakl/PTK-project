import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import ProtectedRoute from './ProtectedRoute';
import AuthPage from "../Pages/AuthPage";
import RegisterPage from "../Pages/RegisterPage";
import {ProfilePage} from "../Pages/ProfilePage";
import GuestRoute from "./GuestRoute";
import CreateCoursePage from "../Pages/CreateCoursePage";
import CoursesPage from "../Pages/CoursesPage"
import CourseDetailsPage from "../Pages/CourseDetailsPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" replace />} />
                <Route path='/home' element={<CoursesPage />} />     
                       <Route 
          path='/auth' 
          element={
            <GuestRoute>
              <AuthPage />
            </GuestRoute>
          } 
        />  
        
        <Route 
          path='/register' 
          element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          } 
        />

                <Route
                  path="/profile"
                  element={
                    // <ProtectedRoute>
                      <ProfilePage />
                    // </ProtectedRoute>
                  }
                />

                <Route path="/profile/:handle" element={<ProfilePage />} />

               
                
                <Route path="/create-course"
                element={
                  // <ProtectedRoute requiredRole={["Teacher", "admin"]}>
                    <CreateCoursePage />
                  // {/* </ProtectedRoute> */}
                }
                />

                <Route path="/course/:id" element={<CourseDetailsPage />} />
                
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    )
}
export default AppRouter;