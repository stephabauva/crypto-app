import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

export default function  App() {
  return (
    <div className="app">
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
                <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/exchanges' element={<Exchanges />} />
                  <Route path='/crytocurrencies' element={<Cryptocurrencies />} />
                  <Route path='/crypto/:coindId' element={<CryptoDetails />} />{/** dynamic **/}
                  <Route path='/news' element={<News />} />
                </Routes>
            </div>
          </Layout>
        </div>
        <div className='footer'>

        </div>
        
    </div>
  );
}
