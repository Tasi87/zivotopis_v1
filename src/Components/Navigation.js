// styles
import './Navigation.css'

function Navigation() {
	return(
		<nav className="navbar navbar-expand-lg fixed-top">
				<section className="container mx-1">
					<div className="navbar-brand">
						<h3 className='nav-text'>
							Tahssain Amir
						</h3>
					</div>

					<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse flex-grow-0" id="navMenu">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a href="#aboutMe" className="nav-link nav-text">
									O mne
								</a>
							</li>
							<li className="nav-item">
								<a href="#education" className="nav-link nav-text">
									Vzdelanie
								</a>
							</li>
							<li className="nav-item">
								<a href="#experience" className="nav-link nav-text">
									Skúsenosti
								</a>
							</li>
							<li className="nav-item">
								<a href="#skills" className="nav-link nav-text">
									Zručnosti
								</a>
							</li>
						</ul>
					</div>
				</section>
			</nav>
	)
}

export default Navigation;