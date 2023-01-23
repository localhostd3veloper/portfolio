import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import { useEffect } from "react";
function App() {
  const vh = window.innerHeight * 0.01;
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${vh}px`, "important");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-screen flex bg-[#101010] w-full">
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
