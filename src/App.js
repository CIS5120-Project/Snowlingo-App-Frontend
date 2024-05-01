import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from "./components/Navbar/Navbar";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SkiInfo from "./pages/SkiInfo/SkiInfo";
import SkiInfo2 from "./pages/SkiInfo/SkiInfo2";
import PersonInfo from "./pages/PersonInfo/PersonInfo";
import Home from "./pages/Home/Home";
import Lesson from "./pages/Lesson/Lesson";
import Unit from "./pages/Unit/Unit";
import Maintenance from './pages/Maintenance/Maintenance';
import Card from './pages/Cards/Card_init';
import Card02 from './pages/Cards/Card_secd';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{'display': "flex", "flexDirection": "column", "height": "100vh"}}>
          <Navbar />
          <DropdownMenu />
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/skiinfo" element={<SkiInfo2 />} />
            <Route path="/skiinfo2" element={<SkiInfo />} />
            <Route path="/personinfo" element={<PersonInfo />} />
            <Route path="/unit" element={<Unit />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/" element={<Landing />} />
            <Route path="/card" element={<Card />} />
            <Route path="/cards02" element={<Card02 />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
