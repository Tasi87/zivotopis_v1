
// Components
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
	<div>
		<div className="container-fluid">
			<div className="row">
				<div className="col col-sm-2 p-0">
					<Sidebar />
				</div>
				<div className="col col-sm-10 p-0">
					<MainContent />
				</div>
			</div>
		</div>
	 </div>
  );
}

export default App;