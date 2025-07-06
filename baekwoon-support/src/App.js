import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import PledgeDetail from './pages/PledgeDetail';
import CandidateDetail from './pages/CandidateDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pledge/:id" element={<PledgeDetail />} />
            <Route path="/candidate/:id" element={<CandidateDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;