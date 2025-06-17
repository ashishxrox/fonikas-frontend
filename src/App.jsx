import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Landing from './components/LandingPage/Landing'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import AboutMain from './components/AboutUs/AboutMain'
import ScrollToTop from './utils/ScrollToTop'
import GetStarted from './components/GetStarted/GetStarted'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'
import Dashboard from './components/Dasboard/Dashboard'
import Insights from './components/Insights/Insights'
import Support from './components/Support/Support'
import SecondaryBtn from './components/Buttons/SecondaryBtn'
import SectorPieChart from './components/Insights/Graphs/PieChart'
import News from './components/News/News'
import Hamburger from './components/Navbar/Hamburger'
import Consultation from './components/Consultation/Consultation'
import FearMeter from './components/Insights/Graphs/FearMeter'
import Invest from './components/Invest/Invest'
import AuthPage from './components/Login/AuthPage'
import ResetPassword from './components/Login/Auth/ResetPassword'
import FeatureSlideLeft from './components/Support/FeaturesLeftSlide'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const [scrollY, setScrollY] = useState(0); 
  const location = useLocation()

  useEffect(() => {
    const MIN_LOAD_TIME = 5000
    const startTime = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = MIN_LOAD_TIME - elapsed

      const hideLoader = () => {
        setIsLoading(false)
        setTimeout(() => setShowLoader(false), 400) // Match with fade-out duration
      }

      if (remainingTime > 0) {
        setTimeout(hideLoader, remainingTime)
      } else {
        hideLoader()
      }
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading)
    }

    return () => window.removeEventListener('load', finishLoading)
  }, [])


  useEffect(() => {
    // Customize the title based on the route
    if (location.pathname === '/') {
      document.title = 'Fonikas'
    } else if (location.pathname === '/about-us') {
      document.title = 'Fonikas | About Us'
    } else if(location.pathname === '/insights'){
      document.title = 'Fonikas | Insights'
    }else if(location.pathname === '/dashboard'){
      document.title = 'Fonikas | Dashboard'
    }else if(location.pathname === '/contact'){
      document.title = 'Fonikas | Contact'
    }else if(location.pathname === '/get-started'){
      document.title = 'Fonikas | Get Started'
    }else if(location.pathname === '/login'){
      document.title = 'Fonikas | Login'
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

return (
  <div className='w-[100%]'>
    {showLoader && <Loading isVisible={isLoading} />}
    {!isLoading && (

      <>
        <ScrollToTop />
        <Navbar scroll={scrollY}/>
        <Hamburger/>
        {/* <DynamicIsland/> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about-us' element={<AboutMain scroll={scrollY}/>} />
          <Route path='/get-started' element={<GetStarted />} />
          <Route path='/login' element={<AuthPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/support' element={<Support />} />
          <Route path='/btn' element={<SecondaryBtn />} />
          <Route path='/pie' element={<SectorPieChart/>} />
          {/* <Route path='/news' element={<News/>} /> */}
          <Route path='/book' element={<Consultation/>} />
          {/* <Route path='/meter' element={<FearMeter/>} /> */}
          <Route path='/meter' element={<FearMeter/>} />
          <Route path='/invest' element={<Invest/>} />
          <Route path='/reset-password/:token' element={<ResetPassword/>} />
          <Route path='/slide' element={<FeatureSlideLeft/>} />

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </>

    )}
  </div>
)
}

export default App
