// image
import certificate from '../assets/cerifikar_js conv_jpeg/cerifikar_js_1.jpeg';

// styles
import './Skills.css';

const Skills = () => {
	return (
		<section id="skills" className="container-fluid py-5 skills">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-6">
						<h2>Zručnosti</h2>
						<ul>
							<li>Microsoft Office</li>
							<li>SAP systém</li>
							<li>Visual Studio Code</li>
							<li>HTML a CSS</li>
							<li>JavaScript - certifikát</li>
							<li>TypeScript - ešte sa učím</li>
							<li>React</li>
							<li>GitHub</li>
							<li>Bootstrap</li>
						</ul>
					</div>
					<div className="col-12 col-lg-4 text-center align-top">
						<img className='certificate' src={certificate} alt="Certifikát" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;