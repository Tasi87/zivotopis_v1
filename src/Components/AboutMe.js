// photo
import profilePhoto from '../assets/Tasi-biela.jpeg';

// styles
import './AboutMe.css';

const AboutMe = () => {
	return (
		<section id="aboutMe" className="container-fluid py-5 aboutMe">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6">
							<h2 className="display-4">About me</h2>
							<p>
								I am eager to continuously learn and develop new skills, which I then enjoy sharing with others. I am communicative, with experience leading both children and adults as a coach and instructor.
							</p>
							<p>
								As an instructor, I conduct methodological courses both in climbing gyms and outdoors on rock faces as a rock instructor. During trainings and courses, I teach not only climbing techniques, but also essential mental preparation, working with fear of heights, fear of falling, and everything necessary to ensure my students learn what they need and my trainees are ready for competitions.
							</p>
							<p>
								As a coach, I lead children’s training sessions, focusing not only on improving their climbing skills but also, for some, preparing them for various competitions and Slovak Cups.
							</p>
							<p>
								My interests include sport and rock climbing, mountaineering, spending time in nature, coaching, and instructing. In my free time, I also enjoy reading, traveling, cinema, as well as board and computer games.
							</p>
							<hr className="my-4" />
							{/* <h2>Contact Information</h2>
							<ul>
								<li>Email: <a href="mailto:tasi87@gmail.com">tasi87@gmail.com</a></li>
								<li>Phone: <a href="tel:+421911148320">+421 911 148 320</a></li>
								<li>
									<address>
										Prievozská 11, <br/>
										821 09 <br/>
										Bratislava II <br/>
										Slovakia
									</address>
								</li>
							</ul> */}
							<h2>Languages</h2>
							<ul>
								<li><b>Slovak</b></li>
								<p>Native</p>
								<li><b>English</b></li>
								<p>Intermediate B1</p>
								<li><b>German</b></li>
								<p>Beginner A2</p>
							</ul>
							<h2>Driving license</h2>
							<ul>
								<li>B</li>
							</ul>
						</div>
						<div className="col-12 col-lg-4 text-center align-top">
							<img src={profilePhoto} alt="Profil" className='profile-photo' />
						</div>
					</div>
				</div>
			</section>
	);
};

export default AboutMe;