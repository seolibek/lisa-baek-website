//a jsx file is a combo of html and js.. in all react components, will have jsx or tsx (if ts) file.
//writing html + js in one file .. this is our react component

import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  ); //empty brackets called react fragments.
  //neat react trick: returning empty brackets satisfying return statement
  //but dont need to clutter code w empty divs!
}

export default App;
