import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Screens
import HomeScreen from './Screens/HomeScreen';
import ContactScreen from './Screens/ContactScreen';
import AboutScreen from './Screens/AboutScreen';
import ForgetPasswordScreen from './Screens/ForgetPasswordScreen';

function App() {

  // App Link
  const appLink = "https://play.google.com/store/apps/details?id=com.askstudios.managerly"

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen appLink={appLink} />} />
        <Route path="/contact-us" element={<ContactScreen appLink={appLink} />} />
        <Route path="/about-us" element={<AboutScreen appLink={appLink} />} />
        <Route path="/reset-password" element={<ForgetPasswordScreen appLink={appLink} />} />
      </Routes>
    </Router>

  );
}

export default App;
