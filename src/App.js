// Components
// import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
	<div>
		<header>
			{/* <Navigation /> */}
		</header>
		<main>
			<AboutMe />
			<Education />
			<Experience />
			<Skills />
		</main>
		<footer>
			<Footer />
		</footer>
	 </div>
  );
}

export default App;