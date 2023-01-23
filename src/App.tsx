import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function App() {
  return (
    <div className="h-screen flex bg-[#101010]">
      <Sidebar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade">
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
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
