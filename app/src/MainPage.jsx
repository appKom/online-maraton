import Header from "./components/Header";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Paragraph from "./components/Paragraph";
import CoverImage from "./components/CoverImage";
import LederTavle from "./components/LederTavle";
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
        text="Barnekreft er ikke det samme som kreft hos voksne. Hos barn utvikles kreften hurtig 
        og det finnes ingen kjente ytre faktorer som er av betydning for hvordan sykdommen utvikler seg. 
        Rundt 200 barn og unge mellom 0 til 18 år rammes hvert år av en kreftsykdom. Totaloverlevelsen 
        av barnekreft er i Norge er cirka 85 prosent. 
        
        Selv om kreft hos barn og ungdom heldigvis er sjelden, er man desto mer avhengig av både nasjonalt, 
        nordisk og internasjonalt samarbeid for å oppnå kunnskap og kunne vurdere behandlingsresultater.

        Online Linjeforening ønsker å støtte Barnekreftsforeningens arbeid, og det gjør vi ved å løpe! 
      "
      />

      <CoverImage image="/temporary-cover2.jpg" />

      <Paragraph
        header="Hvordan løper vi?"
        text="Vi ønsker å samle flest mulig onlinere som vil løpe for å samle inn penger til barnekreftforeningen. 
      
        Man kan velge å støtte på hvilken måte man selv vil. Du kan støtte en enkelt løper, eller sponse 
        x antall kroner per onliner som fullfører x antall kilometer. 
        
        Vi bruker Stava for å hente info om hvor langt hver deltaker har løpt. Du må derfor opprette en bruker på 
        Strava på www.strava.com dersom du ikke har det fra før. 

        For å delta i innsamlingen som løper, melder du deg på via MELD DEG PÅ-knappen øverst på siden. 
      "
    
      />
      

      <LederTavle />
    
      <AlleTavle data={alletavleData} />

      <Paragraph
        header="Sponsorer"
        text="Bedrifter som ønsker å sponse prosjektet kan ta kontakt med kontakt@online.ntnu.no. 
      "
      />

      <Sponsors />

      <Footer />
    </div>
  );
};

export default MainPage;
