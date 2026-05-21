import { useEffect } from "react";
import AppRouter from "./router"
import { getLessonsData } from "./utils/lessonsStorage"

function App() {
  useEffect(() => {
    getLessonsData();
  }, []); 

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
