import { Link } from "react-router-dom";

const SendAsMail = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="p-5 sticky top-0 bg-white shadow-sm rounded-t-md flex justify-between items-center">
        <p>Send as email</p>
        <Link to={"/"} className="text-xs text-[#71CB90]">Send another file</Link>
      </div>
      
      <div className="p-5 grid gap-5">
        <div className="text-xs grid gap-1">
          <span>Title</span>
          <input type="text" className="border bg-[#00000002] rounded-sm p-4 focus:border-[#71CB9072] focus:outline-0" placeholder="Give your mail a subject" />
        </div>
        <div className="text-xs grid gap-1">
          <span>Messgage</span>
          <input type="text" className="border bg-[#00000002] rounded-sm p-4 focus:border-[#71CB9072] focus:outline-0" placeholder="Add a message to your files"/>
        </div>
        <div className="text-xs grid gap-1">
          <span>Email address</span>
          <input type="text" className="border bg-[#00000002] rounded-sm p-4 focus:border-[#71CB9072] focus:outline-0" placeholder="Recever's email address"/>
        </div>
        <button className="border px-8 py-4 text-xs rounded text-white bg-[#71cb90]">Send email.</button>
      </div>
    </div>
  );
};

export default SendAsMail;
