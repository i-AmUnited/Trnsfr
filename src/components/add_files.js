import containerImg from "../Media/container.svg";
import remove from "../Media/delete.svg";
// import add from "../Media/add.svg"
import React, { useState, useRef } from "react";

const AddFiles = () => {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showFileSelector, setShowFileSelector] = useState(false);
  const fileInputRef = useRef(null);

  // handle file selection
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  // handle file input change
  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // remove a selected file
  const handleRemoveFile = (index) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  return (
    <div className="bg-white h-full overflow-y-scroll rounded-md text-sm">
      {/* Heading */}
      <div className="items-end px-5 pt-8 pb-4 sticky top-0 bg-white shadow-sm">
        <p className="text-semibold">Add files.</p>
        <p className="text-xs opacity-60">
          you can only send up to 2GB at a time
        </p>
      </div>


      {!showFileSelector ? (
        <button onClick={() => setShowFileSelector(true)} className="w-full">
          <div className="text-xs text-center grid px-5 py-20">
            <img src={containerImg} alt="" className="justify-self-center mb-3" />
            <p className="opacity-50">You havent uploaded any files yet</p>
            <p className="opacity-50">Click to begin</p>
          </div>
        </button>
      ) : (
        <div className="">
          {selectedFiles.length > 0 && (
            <div className="text-sm grid px-5 py-8">
              {/* <p className="mb-5">Selected Files:</p> */}
              <ul>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="text-xs mb-5">
                    <div className="grid grid-cols-6">
                      <div className="col-span-5 truncate">{file.name}</div>
                      <button className="justify-self-end" onClick={() => handleRemoveFile(index)}>
                        <img src={remove} alt="" />
                      </button>
                    </div>
                    <div className=" text-gray-400">
                      <p className=" font-medium">{(file.size / (1024*1024)).toFixed(2)} mb</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          )}

          <div className="px-5">
            {selectedFiles.length > 0 ? 
            <button onClick={handleFileSelect} className="border w-full py-4 mb-8 text-xs rounded border-[#71CB90] text-[#71CB90] flex justify-center items-center gap-4 hover:bg-[#71CB9024]">
              <span>add more files</span>
            </button>
             : 
            <div className="py-24">
            <button onClick={handleFileSelect} className="border w-full py-4 text-xs rounded border-[#71CB90] text-[#71CB90] hover:bg-[#71CB9024]">
             Select files
            </button>
            </div>
            }
          </div>
          <input
            type="file"
            accept=".pdf, .doc, .docx, .txt"
            multiple
            onChange={handleFileInputChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <div className={ selectedFiles.length > 0 ? "bg-[#F4FBF7] p-5 border-t sticky bottom-0" : "hidden" }>
            <button className="bg-[#71CB90] text-white w-full py-4 text-xs font-semibold rounded">
              Get a link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFiles;
