import React, { useState } from "react";
import axios from "axios";
import { postData } from "../../services/post";
import { useSelector } from "react-redux";

const CreatePost = (props) => {
  const { user: currentuser } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [tempPhoto, setTempPhoto] = useState("");

  const handleSubmit = () => {
    const photoData = new FormData();
    photoData.append("file", tempPhoto);
    photoData.append("upload_preset", "insta-clone");
    photoData.append("cloud_name", "PLUGIN");
    axios
      .post("https://api.cloudinary.com/v1_1/plugin007/image/upload", photoData)
      .then((data) => {
        setPhoto(data.data.url);
        postData(newData, currentuser.token)
          .then((data) => {
            console.log(data);
            props.history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    const newData = {
      title,
      content,
      photo,
    };
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
      <div className="md:flex">
        <div className="w-full">
          <div className="p-3">
            <div className="mb-2">
              <span className="text-sm">Title</span>
              <input
                type="text"
                className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-2">
              <span className="text-sm">Content</span>
              <input
                type="text"
                className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
            </div>
            <div className="mb-2">
              <span>Photo</span>
              <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                <div className="absolute">
                  <div className="flex flex-col items-center ">
                    <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                    <span className="block text-gray-400 font-normal">
                      Attach you files here
                    </span>
                    <span className="block text-gray-400 font-normal">or</span>
                    <span className="block text-blue-400 font-normal">
                      Browse files
                    </span>
                  </div>
                </div>
                <input
                  type="file"
                  className="h-full w-full opacity-0"
                  name="photo"
                  onChange={(e) => setTempPhoto(e.target.files[0])}
                />
              </div>
            </div>
            <div className="mt-3 text-center pb-3">
              <button
                onClick={handleSubmit}
                className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
