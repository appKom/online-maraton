import HeaderResponsive from "./components/Header";
import Alletavle from "./components/Alletavle";

function App() {
  const links = [
    { label: "Sponsorer", link: "/" },
    { label: "Om arrangementet", link: "/" },
    { label: "Ledertavle", link: "/" },
  ];

  const alletavleData = [
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
  ];

  return (
    <div>
      <HeaderResponsive links={links} />
      <Alletavle data={alletavleData} />
    </div>
  );
}

export default App;
