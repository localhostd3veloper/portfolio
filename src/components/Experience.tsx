import { Chrono } from "react-chrono";
import { Link } from "react-router-dom";
import { experienceItems } from "../static/static-data";

function Experience() {
  return (
    <div className="sm:w-3/4 px-3 sm:px-12 pt-6 h-screen text-gray-300">
      <h1 className="text-4xl font-semibold flex justify-between">
       Work Experience{" "}
        <Link
          to="/"
          className="underline text-blue-300 block ml-auto sm:hidden text-lg"
        >
          Home
        </Link>
      </h1>
      <div style={{ width: "100%", height: "90vh" }} className="text-white">
        <Chrono
          title="Experience"
          items={experienceItems}
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={3000}
          theme={{
            primary: "#f5f5f5",
            secondary: "#f5f5f5",
            cardForeColor: "#f5f5f5",
            titleColor: "#f5f5f5",
            cardBgColor: "#2e2e2e",
          }}
          hideControls
          useReadMore
          cardWidth={400}
        />
      </div>
    </div>
  );
}

export default Experience;
