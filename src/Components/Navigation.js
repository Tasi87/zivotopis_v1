

function Navigation() {
	return(
		<nav className="navbar navbar-expand-lg bg-light fixed-top">
				<section className="container mx-1">
					<div className="navbar-brand">
						<i className="bi bi-file-earmark-person text-info fs-2 d-inline-block aligne-middle"></i>
						Životopis
					</div>

					<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse flex-grow-0" id="navMenu">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a href="#aboutMe" className="nav-link">
									O mne
								</a>
							</li>
							<li className="nav-item">
								<a href="#education" className="nav-link">
									Vzdelanie
								</a>
							</li>
							<li className="nav-item">
								<a href="#experience" className="nav-link">
									Skúsenosti
								</a>
							</li>
							<li className="nav-item">
								<a href="#skills" className="nav-link">
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