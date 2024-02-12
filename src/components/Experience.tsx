import { Chrono } from "react-chrono";
import { Link } from "react-router-dom";
import { experienceItems } from "../static/static-data";

function Experience() {
  return (
    <div className="sm:w-3/4 overflow-auto px-3 sm:px-12 pt-6  text-gray-700">
      <h1 className="text-4xl font-semibold flex justify-between">
       Work Experience{" "}
        <Link
          to="/"
          className="underline text-blue-300 block ml-auto sm:hidden text-lg"
        >
          Home
        </Link>
      </h1>
      <div  className=" ">
        <Chrono
          title="Experience"
          items={experienceItems}
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={3000}
          theme={{
            primary: "#2e2e2e",
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
