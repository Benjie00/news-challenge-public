import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Headline from './components/Headline';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';
import './index.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([])
  const getData = async () => {
      const res = await axios.get(process.env.REACT_APP_NEWS_DATA)
      setArticles(res.data.response.results);  
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <div className='feed'>
        <div>
          <Header logo={"images/logo.png"} />
        </div>
        <Routes>
          <Route path="/" element={<Headline articles={articles} />} />
          <Route path="/moreinfo/:id" element={<MoreInfo articles={articles} />} />
        </Routes>
        <div><Footer /></div>
      </div>
    </React.Fragment>
  );
}

export default App;
