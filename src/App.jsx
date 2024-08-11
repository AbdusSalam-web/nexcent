import "./App.css";
import Body from "./components/Body";
import Client from "./components/Client";
import Community from "./components/Community";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return <>
    <Navbar />
    <Hero />
    <Client />
    <Community />
    <Body/>
  </>;
}

export default App;
