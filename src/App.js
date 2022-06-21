import Home from "./Home";
import CV from "./components/CV/CV";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/cv' element={<CV />} exact />
      </Routes>
    </BrowserRouter>
  );
}
