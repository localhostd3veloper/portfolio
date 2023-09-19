import { Link } from "react-router-dom";
import { blogs } from "../static/static-data";

function Blogs() {
  return (
    <div className="w-100 sm:w-3/4  flex flex-col sm:px-12 px-6 py-6 gap:5 md:gap-16 text-gray-300 ">
      <div className="text-2xl font-semibold flex justify-between">
        <span>BLOGS</span>{" "}
        <Link to="/" className="underline text-gray-600 text-base">
          Go Home
        </Link>
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        {blogs.map((blog, index) => (
          <div
            key={blog.url}
            className="md:w-1/3 p-4 bg-gray-800/50 rounded-md shadow-xl"
          >
            <a href={blog.url} target="_blank" rel="noreferrer">
              <img
                className="bg-cover rounded-md"
                src={blog.imgURL}
                alt={blog.name}
              />

              <div className="text-2xl font-semibold hover:text-sky-600 duration-300 mt-4">
               {index+1}. {blog.name}
              </div>
              <p className="italic">{blog.description}</p>
              <div className="flex md:flex-row flex-col md:gap-3">
                {blog.hashtags.map((hashtag) => (
                  <span key={hashtag} className="text-sm">
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
