import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen bg-slate-100 flex">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
