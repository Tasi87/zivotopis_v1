

// Components
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

function App() {
  return (
	<div>
		<header>
			<Navigation />
		</header>
		<main>
			<AboutMe />
			<Education />
			<Experience />
			<Skills />
		</main>
	 </div>
  );
}

export default App;