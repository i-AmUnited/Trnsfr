import { useState } from "react";
import arrow from "../Media/arrow.svg"

const Accordion = ({ Title, Content }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };


  return (
      <div className="border rounded mb-2">
        <div className="flex justify-between p-4 cursor-pointer items-center gap-3" onClick={toggleAccordion} >
          <p className="text-xs md:text-sm font-semibold"> {Title} </p>
          <img src={arrow} alt="" className={`transform ${ open ? "rotate-0" : "rotate-180" } transition-transform bg-green`}/>
        </div>
        {open && (
          <div className="px-4 pb-4 text-sm">
            <p className=" leading-loose">{Content}</p>
          </div>
        )}
      </div>
  );
};

export default Accordion;

