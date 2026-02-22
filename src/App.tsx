import './App.css'
import CourseCard from './components/course/CourseCard';
import MainPage from './components/layout/Header/Main-page';
import HeroSection from './components/layout/Hero-section/HeroSection';
import webDevImage from './assets/web-development1.png';

function App() {
  return (
    <>
      <MainPage />
      <HeroSection />
      <CourseCard title="Web Development Fundamentals" instructor="Your Name" image={webDevImage} price={199000} rating={4.5} />
    </>
  )
}

export default App
