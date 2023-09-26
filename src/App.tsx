import { Route, Switch } from "react-router-dom";

import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

function App() {

  return (
    <div className="h-full md:h-[calc(100dvh)] flex bg-[#101010] w-full">
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
        <Route path="/blogs">
          <Blogs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
