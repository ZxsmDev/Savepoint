import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Body from "../components/Body.jsx";


export default function Home({ links, icons }) {

  return (
    <>
      <div className="flex">
        <Navbar links={links} icons={icons} />
        <div className="flex flex-col w-full">
          <Body />
          <Footer links={links} icons={icons} />
        </div>
      </div>
    </>
  );
}
