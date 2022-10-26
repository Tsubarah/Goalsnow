import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import '../src/Assets/scss/App.scss'
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />
                <Route path="/goals" element={<GoalsPage />} />

            </Routes>

            <ToastContainer autoClose={2000} />
            <ReactQueryDevtools />
        </div>
    );
}

export default App;
