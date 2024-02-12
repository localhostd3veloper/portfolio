import { Link } from "react-router-dom";
import { blogs } from "../static/static-data";

function Blogs() {
  return (
    <div className="overflow-auto sm:w-3/4  flex flex-col sm:px-3 px-6 py-6 gap:5 md:gap-16 text-gray-700 ">
      <div className="text-2xl font-semibold flex justify-between">
        <span>BLOGS</span>{" "}
        <Link to="/" className="underline text-gray-600 text-base">
          Go Home
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={blog.url}
            className="p-4 m-3 bg-gray-300 border-2 border-gray-400 rounded-md shadow-xl"
          >
            <a href={blog.url} target="_blank" rel="noreferrer" className="flex flex-col justify-between">
              <img
                className="bg-cover rounded-md h-2/3"
                src={blog.imgURL}
                alt={blog.name}
              />

              <div className="text-2xl font-semibold hover:text-sky-800 duration-300 mt-4">
               {index+1}. {blog.name}
              </div>
              <p className="italic">{blog.description}</p>
              <div className="md:gap-3 break-words">
                {blog.hashtags.map((hashtag) => (
                  <span key={hashtag} className="text-sm mx-1">
                    {hashtag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
