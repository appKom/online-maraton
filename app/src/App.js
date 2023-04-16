import Header from "./components/Header";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Paragraph from "./components/Paragraph";
import CoverImage from "./components/CoverImage";
import LederTavle from "./components/LederTavle";
import AlleTavle from "./components/AlleTavle";
import { useEffect, useState } from "react";

const [verdi, setVerdi] = useState([]);
useEffect(() => {
  fetch("https://onlinemarathon-api.onrender.com/data", {
    method: "GET",

    headers: {
      "Allow-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "*",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      setVerdi(data);
    });
}, []);
const alletavleData = verdi; /*[
    { firstname: "Big D", lastname: "L.", total: "123" },
    { firstname: "Chris", lastname: "O.", total: "124" },
    { firstname: "Jesper", lastname: "L.", total: "125" },
    { firstname: "Mustafa", lastname: "O.", total: "126" },
    { firstname: "Fredrik", lastname: "L.", total: "127" },
    { firstname: "Ali", lastname: "O.", total: "128" },
    { firstname: "Peder", lastname: "L.", total: "129" },
    { firstname: "Mohammed", lastname: "O.", total: "130" },
    { firstname: "Ola", lastname: "L.", total: "131" },
    { firstname: "Robin", lastname: "O.", total: "132" },
    { firstname: "Siri", lastname: "L.", total: "133" },
    { firstname: "Mads", lastname: "O.", total: "134" },
    { firstname: "Aksel", lastname: "L.", total: "135" },
    { firstname: "Viktor", lastname: "O.", total: "136" },
    { firstname: "Bilal", lastname: "L.", total: "137" },
    { firstname: "Julian", lastname: "O.", total: "138" },
    { firstname: "Sander", lastname: "L.", total: "139" },
    { firstname: "Matias", lastname: "O.", total: "140" },
    { firstname: "David", lastname: "L.", total: "141" },
    { firstname: "Jøgga", lastname: "O.", total: "142" },
  ];*/

function App() {
  return (
    <div>
      <Header />
      <CoverImage image="/temporary-cover1.jpg" />

      <Paragraph
        header="Hvorfor løper vi?"
        text="Barnekreft ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Barnekreft ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      "
      />

      <CoverImage image="/temporary-cover2.jpg" />

      <Paragraph
        header="Hvordan løper vi?"
        text="Strava ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      "
      />

      <LederTavle />

      <AlleTavle data={alletavleData} />

      <Paragraph
        header="Sponsorer"
        text="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Barnekreft ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      "
      />

      <Sponsors />

      <Footer />
    </div>
  );
}

export default App;
