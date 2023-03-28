import HeaderResponsive from "./components/Header";
import Alletavle from "./components/Alletavle";
import { useState, useEffect } from "react";

function App() {
  const links = [
    { label: "Sponsorer", link: "/" },
    { label: "Om arrangementet", link: "/" },
    { label: "Ledertavle", link: "/" },
  ];
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

  const alletavleData = verdi;

  return (
    <div>
      <HeaderResponsive links={links} />
      <Alletavle data={alletavleData} />
    </div>
  );
}

export default App;
