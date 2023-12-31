import { Link } from "react-router-dom";

const ViewContent = () => {
  return (
    <div className="bg-white rounded-md overflow-y-scroll">
      <div className="px-5 pt-8 pb-4 sticky top-0 bg-white shadow-sm rounded-t-md grid gap-2">
        <p className="text-semibold">Uploaded files</p>
        <p className="text-xs opacity-60">
          {" "}
          4 files <span className="font-semibold">(356 MB)</span>
        </p>
      </div>
      
      <div className="text-xs mb-2 px-5 pt-5">
        <div className="grid gap-4">
          {/* Map uploaded file list here */}
          <div className="truncate">
            <p>Filename</p>
            <p className=" font-medium text-gray-400"> 32mb </p>
          </div>
        </div>
      </div>

      <div className="p-5 sticky bottom-0 bg-[#F4FBF7] border border-t-[#71CB9024] rounded-b-md grid gap-2">
        <div className="flex gap-4">
          <Link to={"/file_ready"}>
            <button className="border px-8 py-4 text-xs rounded text-white bg-[#71cb90]">Go back</button>
          </Link>
          <Link to={"/"}>
            <button className="border px-8 py-4 text-xs rounded text-[#71cb90] bg-white">Send another file</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewContent;
