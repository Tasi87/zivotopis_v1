
// Components
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
	<div>
		<div className="container-fluid">
			<div className="row">
				<div className="col col-md-4">
					<Sidebar />
				</div>
				<div className="col col-md-8">
					<MainContent />
				</div>
			</div>
		</div>
	 </div>
  );
}

export default App;