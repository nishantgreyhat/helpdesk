import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ForgotPass from './components/ForgotPass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
      </Routes>
    </Router>
  );
}

export default App;
