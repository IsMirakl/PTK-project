import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth.ts";
import AppRouter from "./routes/AppRouter.tsx";

import './styles/global.css';

function App() {
  const {checkAuth} = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <>
    <AppRouter />
    </>
  )
}

export default App
