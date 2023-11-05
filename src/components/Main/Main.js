import React from "react";
import "./Main.css";
// import Promo from "../Main/Promo/Promo";
// import AboutProject from "./AboutProject/AboutProject";
// import Techs from "./Techs/Techs";
// import AboutMe from "./AboutMe/AboutMe";

// Определение компонента Main
function Main({children}) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

// function Main() {
//   return (
//     <main>
//       <Promo />
//       <AboutProject />
//       <Techs />
//       <AboutMe />
//     </main>
//   );
// }

export default Main;
