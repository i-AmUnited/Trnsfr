// import { Outlet } from "react-router-dom";
// import Footer from "../components/footer";
// import Navbar from "../components/nav";
// import logowhite from "../Media/logoWhite.svg";
// import Advert1 from "../components/adverts/adComponent1";
// import Advert2 from "../components/adverts/adComponent2";
// import Advert3 from "../components/adverts/adComponent3";
// import { useState, useEffect } from "react";

// const Home = () => {
  
//   const components = [Advert1, Advert2, Advert3]
//   const [currentComponent, setCurrentComponent] = useState(components[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Generate a random index to select a component from the array
//       const randomIndex = Math.floor(Math.random() * components.length);
//       setCurrentComponent(components[randomIndex]);
//     }, 3000); // 30 seconds

//     return () => {
//       // Clear the interval when the component unmounts to prevent memory leaks
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="hero_img h-[90vh] overflow-hidden">
//         <Navbar
//           bgClass={"backdrop-blur-md bg-white/20"}
//           logo={logowhite} 
//         />
//         <div className="grid grid-cols-1 md:grid-cols-3 m-5 px-0 md:px-5 h-[76%] items-center">
//           <div>
//           <Outlet />
//           </div>
//           <div className="p-8 col-span-2">
//             {currentComponent}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import logowhite from "../Media/logoWhite.svg";
import Advert1 from "../components/adverts/adComponent1";
import Advert2 from "../components/adverts/adComponent2";
import Advert3 from "../components/adverts/adComponent3";
import { useState, useEffect } from "react";

const Home = () => {
  
  const components = [Advert1, Advert2, Advert3]
  const [randomComponent, setRandomComponent] = useState(null);

  useEffect(() => {
    shuffleComponents();
  }, []);

  const shuffleComponents = () => {
    // Create a copy of the components array and shuffle it
    const shuffledComponents = [...components];
    for (let i = shuffledComponents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledComponents[i], shuffledComponents[j]] = [shuffledComponents[j], shuffledComponents[i]];
    }

    // Set the first component from the shuffled array
    setRandomComponent(shuffledComponents[0]);
  };

  // const componentProps = {
  //   Heading: "Some value",
  //   Body: "Bodyskdajbifkdlsbgoisdbui",
  // };

  
  return (
    <div>
      <div className="hero_img h-[90vh] overflow-hidden">
        <Navbar
          bgClass={"backdrop-blur-md bg-white/20"}
          logo={logowhite} 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 m-5 px-0 md:px-5 h-[76%] content-between">
          <Outlet />
          
          <div className="p-8 col-span-2 hidden lg:block">
            {randomComponent}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
