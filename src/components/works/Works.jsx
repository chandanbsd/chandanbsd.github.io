import { useState } from "react";
import "./works.scss";
import ReactPlayer from "react-player";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Business Daily Mobile App",
      desc: "React Native application to find latest news, track stock value and cryptocurrency prices",
      img: "https://youtu.be/TfdJhcw-w5w",
      demoURL: "https://youtu.be/TfdJhcw-w5w",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "College Notice Board",
      desc: "PHP web app for my undergraduate university for Online Notification and Event Registrations",
      img: "https://youtu.be/GpRaH7vO1tE",
      demoURL: "https://youtu.be/GpRaH7vO1tE",
    },
    // {
    //   id: "2",
    //   icon: "./assets/globe.png",
    //   title: "CDOT Marketplace",
    //   desc:
    //     "Business-to-Business E-Commerce Application in Flutter and Firebase",
    //   img:
    //     "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    // },
    // {
    //   id: "3",
    //   icon: "./assets/globe.png",
    //   title: "College Notice Board Website",
    //   desc:
    //     "PHP Project for university administrators, professors and student origization presidents to post memos, circulars and event notifications",
    //   img:
    //     "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    // },
    // {
    //   id: "4",
    //   icon: "./assets/globe.png",
    //   title: "Deep Learning Based Music Player",
    //   desc:
    //     "Python applicaion that analyses the user's facial experssion with OpenCV, identifies hand gestures for pause, play, skip etc. in MediaPipe and plays relevant music on Youtube",
    //   img:
    //     "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    // },
    // {
    //   id: "5",
    //   icon: "./assets/globe.png",
    //   title: "Analysing Highway Traffic",
    //   desc:
    //     "Python application that detects, tacks and counts the number of cars moving up and down a two lane highway.",
    //   img:
    //     "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div>
        <h1>My Projects</h1>

        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  </div>
                </div>
                <div className="right">
                  <ReactPlayer url={d.demoURL} />
                  {/* <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
}
