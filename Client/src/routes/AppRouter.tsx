import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from '../Components/ProtectedRoute';
import HomePage from '../Pages/HomePage';
import AuthPage from "../Pages/AuthPage";
import RegisterPage from "../Pages/RegisterPage";
import ProfilePage from "../Pages/ProfilePage";
import GuestRoute from "./GuestRoute";
import MyCoursesPage from "../Pages/MyCoursesPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" replace />} />
                <Route path='/home' element={<HomePage />} />     
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
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-courses"
          element={
            <MyCoursesPage/>
          }
        />
                
        <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
</Router>
    )
}
export default AppRouter;