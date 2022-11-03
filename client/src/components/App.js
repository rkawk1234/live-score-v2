import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Futuregames from '../routes/Futuregames';
import Pastgames from '../routes/Pastgames';
import Games from '../routes/Games';
import Layout from './Layout';
import Livescore from '../routes/Livescore';
import Login from '../routes/Login';
import Register from '../routes/Register';
import Prediction from '../routes/Prediction';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prediction" element={<Prediction />} />
          <Route path="games" element={<Games />} />
          <Route path="pastgames" element={<Pastgames />} />
          <Route path="futuregames" element={<Futuregames />} />
          <Route path="livescore" element={<Livescore />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
