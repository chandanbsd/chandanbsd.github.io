import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { SocialIcon } from 'react-social-icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
      <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        <div>

        <SocialIcon url="https://github.com/chandanbsd" fgColor="white"/>
          <SocialIcon url="https://twitter.com/chandanbsd" fgColor="white"/>
          <SocialIcon url="https://linkedin.com/in/chandanbsd/" fgColor="white"/>
        </div>
        <div className="left">
          <a href="#intro" className="logo">
            Chandan Bangalore Shankar Denanath
          </a>
          
        </div>
        
      </div>
    </div>
  );
}
