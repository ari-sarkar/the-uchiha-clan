import React from 'react';
import './App.css';
import TopBanner from "./components/TopBanner";
import Sharingan from "./components/TheSharingan";
import EyeEvolution from "./components/EyeEvolution";
import SPower from "./components/SharinganPower";
import Mangekyo from "./components/Mangekyo";
import SVideo from './components/SharinganVideo';
import AllUchihas from "./components/AllUchihas";
function App() {
  return (
    <main className="main">
      <TopBanner />
      <Sharingan />
      <EyeEvolution />
      <SPower />
      <Mangekyo />
      <SVideo />
      <AllUchihas />
    </main>
  );
}

export default App;
