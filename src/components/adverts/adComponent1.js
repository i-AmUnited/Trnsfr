import advert from "../../Media/2.jpg"
import { Link } from "react-router-dom";

const Advert1 = () => {
    return ( 
        <a href="">
        <div className="grid grid-cols-2 text-white items-center">
          <div>
            <p className="inknut-font text-5xl leading-[60px]">Heading text blah blah</p>
            <p className="text-sm mt-6 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem repellat delectus fuga velit? Magnam aut eius rem accusantium possimus?</p>
          </div>
          <img src={advert} alt="" className="rounded-md w-full object-cover"/>
        </div>
        </a>
     );
}
 
export default Advert1;