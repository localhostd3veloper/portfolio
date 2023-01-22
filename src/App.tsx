import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="h-screen bg-slate-100 flex">
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
      </Switch>
    </div>
  );
}

export default App;
