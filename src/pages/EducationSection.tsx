import IULogo from "../../public/iulogo.svg";

import BITLogo from "../../public/bitlogo.png";

const EducationSection = () => (
  <div className="md:mb-10 lg:w-3/5 lg:ml-auto lg:mr-auto">
    <h3 className="text-4xl font-semibold text-center leading-tight p-4">
      Education
    </h3>
    <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch md:justify-evenly">
      <div className="card glass w-80 h-80 mb-5 md:mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <figure className="pt-1">
          <img src={IULogo.src} alt="Indiana University Bloomington logo" className="w-full h-full object-contain" />
        </figure>
        <div className="card-body  text-center">
          <div className="card-title justify-center">
            Indiana University Bloomington
          </div>
          <p>Master of Science in Computer Science</p>
        </div>
      </div>
      <div className="card glass w-80 h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <figure >
          <img src={BITLogo.src} alt="Bangalore Institute of Technology logo" className="w-full h-full object-contain" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            Bangalore Institute of Technology
          </h2>
          <p>Bachelor of Engineering in Computer Science & Engineering</p>
        </div>
      </div>
    </div>
  </div>
);

export default EducationSection;
