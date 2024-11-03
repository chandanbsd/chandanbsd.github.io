import "../styles/hero-section.css";
import ProfilePicture from "../../public/me2.jpg";
import IULogo from "../../public/iulogo.svg";
import React from "react";
import TypeScript from "../../public/typescript.svg";
import Angular from "../../public/angular.svg";
import dotnet from "../../public/dotnet.svg";
import AzureCosmosDB from "../../public/azure-cosmos-db.svg";
import Azure from "../../public/azure.svg";
import AzureSQLServer from "../../public/azure-sql-server.svg";
import BITLogo from "../../public/bitlogo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-sec">
        <div className="hero-sec__left">
          <div className="intro-sec">Chandan Bangalore Shankar Denanath</div>
          <div className="edu-sec">
            <h2 className="edu-sec__title">Education </h2>
            <div className="edu-section-flex">
              <div>
                <img src={IULogo.src} alt="indiana University Bloomington Logo" className="edu-sec__logo" />
                <h4>
                  Indiana University Bloomington <br />
                  (Master of Science in Computer Science)
                </h4>
                <p>Fall 2021 - Spring 2023</p>
              </div>
              <div className="edu-sec-cushion"></div>
              <div>
                <img src={BITLogo.src} alt="Bangalore Institute of Technology Logo" className="edu-sec__logo" />
                <h4>
                  Bangalore Institute of Technology <br />
                  (Bachelor of Engineering in Computer Science)
                </h4>
                <p>Aug 2017 - Aug 2021</p>
              </div>
            </div>
          </div>

          <div className="skill-sec">
            <h2 className="skill-sec__title">Key Skills</h2>

            <div className="skill-sec__desc">
              <div className="skill-sec__desc__item">
                <div>
                  <img src={Angular.src} alt="angular logo" className="skill-img-con" />
                </div>
                <div className="skill-title">Angular</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={TypeScript.src} alt="typescript logo" className="skill-img-con" />
                </div>
                <div className="skill-title">TypeScript</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={dotnet.src} alt="dotnet logo" className="skill-img-con" />
                </div>
                <div className="skill-title">.NET</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={dotnet.src} alt="python" className="skill-img-con" />
                </div>
                <div className="skill-title">EF Core</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={TypeScript.src} alt="csharp logo" className="skill-img-con"
                  />
                </div>
                <div className="skill-title">C#</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={Azure.src} alt="Azure logo" className="skill-img-con"
                  />
                </div>
                <div className="skill-title">Azure</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={AzureSQLServer.src} alt="Azure SQL server logo" className="skill-img-con"
                  />
                </div>
                <div className="skill-title">SQL Server</div>
              </div>

              <div className="skill-sec__desc__item">
                <div>
                  <img src={AzureCosmosDB.src} alt="Azure Cosmos DB LOGO" className="skill-img-con"
                  />
                </div>
                <div className="skill-title">Cosmos DB</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-section-right">
            <img src={ProfilePicture.src} alt="" className="a-img" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
