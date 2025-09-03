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
						<h2>Skills</h2>
						<ul>
							<li>JavaScript - certified</li>
							<li>HTML a CSS</li>
							<li>SAP system</li>
							<li>Microsoft Office</li>
							<li>Visual Studio Code</li>
							<li>TypeScript - currently learning</li>
							<li>React</li>
							<li>GitHub</li>
							<li>Bootstrap</li>
						</ul>
					</div>
					{/* <div className="col-12 col-lg-4 text-center align-top">
						<img className='certificate' src={certificate} alt="Certifikát" />
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Skills;