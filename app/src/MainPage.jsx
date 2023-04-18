import Header from "./components/Header";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Paragraph from "./components/Paragraph";
import CoverImage from "./components/CoverImage";
import AlleTavle from "./components/AlleTavle";
import { useState, useEffect } from "react";

const MainPage = (props) => {
  const [stravaData, setStravaData] = useState([]);
  useEffect(() => {
    fetchSetData();
  }, []);
  

  const fetchSetData = async () => {
    fetch("https://onlinemarathon-api.onrender.com/data", {
      method: "GET",

      headers: {
        "Allow-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "*",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setStravaData(data);
        console.log(data);
      });
  };

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
      <div id="ledertavle">
        <AlleTavle data={stravaData} />
      </div>

      <Paragraph
        header="Sponsorer"
        text="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Barnekreft ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      "
      />
      <div id="sponsorer" >
        <Sponsors />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
