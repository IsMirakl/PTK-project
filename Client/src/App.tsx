import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth.ts";
import AppRouter from "./routes/AppRouter.tsx";
import 'react-toastify/dist/ReactToastify.css';

import './styles/global.css';

function App() {
  const {checkAuth} = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="app">
    <AppRouter />
    </div>
  )
}

export default App
