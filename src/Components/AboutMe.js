// photo
import profilePhoto from '../assets/Profilovka - kópia.jpg'

// styles
import './AboutMe.css'

const AboutMe = () => {
	return (
		<section id="aboutMe" className="container-fluid py-5 bg-secondary text-light">
				<div className="contaner px-2">
					<div className="row">
						<div className="col-12 col-lg-6">
							<h2 className="display-4">O mne</h2>
							<p>
								Rád sa vzdelávam, učím novým zručnostiam a potom ich odovzdávam iným. Som komunikatívny typ, čoho dôkazom je práca s deťmi aj dospelými (tréner, inštruktor). Mojou záľubou je športové lezenie na skalách, horolezectvo, pobyt v prírode, inštruktorovanie a trénovanie, čítanie, cestovanie, záujem o kinematografiu, spoločenské alebo počítačové hry.
							</p>
							<hr className="my-4" />
							<h2>Kontaktné údaje</h2>
							<ul>
								<li>Email: <a href="mailto:tasi87@gmail.com">tasi87@gmail.com</a></li>
								<li>Telefón: <a href="tel:+421911148320">+421 911 148 320</a></li>
								<li>
									<address>
										Prievozská 11, <br/>
										821 09 <br/>
										Bratislava II <br/>
										Slovenská republika
									</address>
								</li>
							</ul>
							<h2>Jazyky</h2>
							<ul>
								<li><b>Anglický jazyk</b></li>
								<p>Mierne pokročilý B1</p>
								<li><b>Nemecký jazyk</b></li>
								<p>Začiatočník A2</p>
							</ul>
							<h2>Vodičský preukaz</h2>
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