
import HeaderResponsive from "./components/Header";
import Alletavle from "./components/Alletavle";
import JoggaSpesial from "./components/JoggaSpesial";

function App() {
  const links = [
    { label: "Sponsorer", link: "/" },
    { label: "Om arrangementet", link: "/" },
    { label: "Ledertavle", link: "/" },
  ];

  const alletavleData = [
    { firstname: "Sander", lastname: "L.", total: "123" },
    { firstname: "Matias", lastname: "O.", total: "124" },
    { firstname: "David", lastname: "L.", total: "125" },
    { firstname: "Julian", lastname: "O.", total: "126" },
    { firstname: "Sander", lastname: "L.", total: "123" },
    { firstname: "Matias", lastname: "O.", total: "124" },
    { firstname: "David", lastname: "L.", total: "125" },
    { firstname: "Julian", lastname: "O.", total: "126" },
    { firstname: "Sander", lastname: "L.", total: "123" },
    { firstname: "Matias", lastname: "O.", total: "124" },
    { firstname: "David", lastname: "L.", total: "125" },
    { firstname: "Julian", lastname: "O.", total: "126" },
    { firstname: "Sander", lastname: "L.", total: "123" },
    { firstname: "Matias", lastname: "O.", total: "124" },
    { firstname: "David", lastname: "L.", total: "125" },
    { firstname: "Julian", lastname: "O.", total: "126" },
    { firstname: "Sander", lastname: "L.", total: "123" },
    { firstname: "Matias", lastname: "O.", total: "124" },
    { firstname: "David", lastname: "L.", total: "125" },
    { firstname: "Julian", lastname: "O.", total: "126" },
  ];

  return (
    <div>
      <HeaderResponsive links={links} />
      <JoggaSpesial />
      <Alletavle data={alletavleData} />
    </div>
  );
}

export default App;
