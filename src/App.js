

// Components
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";

function App() {
  return (
	<div>
		<header>
			<Navigation />
		</header>
		<main>
			<AboutMe />
			<Education />
		</main>
	 </div>
  );
}

export default App;