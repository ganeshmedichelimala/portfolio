import React from "react";
import "./intro.css";
import bgimage from "../../assets/imageout.png";
import btnimage from "../../assets/hireme.png";
import cvimage from "../../assets/cv.png";
import { Link } from "react-scroll";

const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ganesh_Medichelimala_CV.pdf"; // The path is relative to the public folder
    link.download = "Ganesh_Medichelimala_CV.pdf"; // Specify the file name for download
    link.click(); // Trigger the download
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introtext">
          I'm <span className="introname">Ganesh Medichelimala</span>
          <br />
          Website Developer
        </span>
        <p className="introPara">
          I'm a skilled web developer with experince in creating <br /> fully
          functional full stack websites{" "}
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button className="hirebtn">
            <img src={btnimage} alt="nio" className="btnimg" />
            Hire Me
          </button>
        </Link>
        <Link>
          <button className="cvbtn" onClick={handleDownload}>
            <img src={cvimage} alt="Download CV" className="btnimg" />
            Download CV
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
