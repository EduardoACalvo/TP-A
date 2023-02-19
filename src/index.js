import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Header, Hero, About, Services, Portfolio, Opinions, Blog, Experience, Contact, Pie } from './components'; //no funciona
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Opinions } from './components/Opinions/Opinions';
import { Blog } from './components/Blog/Blog';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact'
import { Pie } from './components/Pie/Pie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Opinions />
    <Blog />
    <Experience />
    <Contact />
    <Pie />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

