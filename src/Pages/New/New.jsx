import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";

const New = ({ input, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-6">
        <Navbar />
        <div className="shadow-card p-2 mb-4">
          <h1 className="text-gray-400 ">{title}</h1>
        </div>
        <div className="shadow-card p-2 mb-4 flex">
          <div className="flex-1 flex justify-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="flex-2">
            <form className="flex flex-wrap gap-6 justify-around">
              <div className="w-2/5">
                <label htmlFor="file" className="flex items-center gap-2">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  className="w-full p-2 outline-none border-b-1 border-gray-500"
                />
              </div>

              {input.map((input) => (
                <div className="w-2/5" key={input.id}>
                  <label className="flex items-center gap-2">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full p-2 outline-none border-b border-gray-500"
                  />
                </div>
              ))}
              <button className="w-48 p-3 bg-teal-600 text-white font-bold mt-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
