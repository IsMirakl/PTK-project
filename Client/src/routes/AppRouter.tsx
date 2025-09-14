import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from '../Pages/HomePage';
import AuthPage from "../Pages/AuthPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" replace />} />
                <Route path='/home' element={<HomePage />} />     
                <Route path='/auth' element={<AuthPage />} />  
                <Route path='/register' element={<HomePage />} />            
            </Routes>
        </Router>
    )
}
export default AppRouter;