import Header from "./components/Header";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Paragraph from "./components/Paragraph";
import CoverImage from "./components/CoverImage";
import LederTavle from "./components/LederTavle";
import AlleTavle from "./components/AlleTavle";

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

function App() {
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
        Pengene er tenkt å komme fra bedrifter som vil sponse x antall kroner per onliner som fullfører x antall kilometer.

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
}

export default App;
