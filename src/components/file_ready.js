import pic from "../Media/file_ready.svg"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Loading from "./loading";

const FileReady = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        },5000); // you fit change this number🤷🏽
      }, []);

    return ( 
        <div className="bg-white px-5 pt-5 pb-10 rounded-md">
      {isLoading ? (
        <Loading />
      ) : (
            <div>
            <div className="flex justify-center">
              <img src={pic} alt="" />
            </div>
            <p className="text-xs font-medium text-center">Your file is ready</p>
            <input type="text" name="" id="" value={"https://tailwindcss.com/docs/align-content-center"} disabled className="p-4 rounded-sm text-sm md:text-xs w-full border border-[#c4c4c432] bg-[#c4c4c416] truncatem my-5"/>
            <div className="flex justify-center">
              <button className="border px-8 py-4 text-xs rounded text-white bg-[#71cb90]">
               Copy link
              </button>
            </div>
            <div className="grid grid-cols-2 text-xs gap-8 mt-6">
              <Link to={"/send_file"} className="text-end text-[#71cb90] underline">Send as email</Link>
              <Link to={"/view_content"} className="opacity-75 underline">View content</Link>
            </div>
            </div>
)}</div>
     );
}
 
export default FileReady;