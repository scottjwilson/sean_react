import React from 'react';
import MessageCard from './components/MessageCard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'


function App() {
    return (
      <div className="App">
        <Header />
        <MessageCard message={{
          title: "Trip To New York", 
          imgUrl: "https://i.imgur.com/GaebM2U.jpg", 
          desc: "This one one of his top destinations to visit.",
          author: "Scott Wilson"}}
        />
        <MessageCard message={{
          title: "Trip To Hong Kong, China", 
          imgUrl: "https://i.imgur.com/e2i1NPn.jpg", 
          desc: "This one one of his top destinations to visit.",
          author: "Scott Wilson"}}
        />
        <Footer />
      </div>
    );
  }


export default App;
