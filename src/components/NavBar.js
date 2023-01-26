import { Link } from "react-router-dom";
import { FaLock, FaHome, FaList, FaUsers} from "react-icons/fa";
import "../Styles/main.css";
import voting from './voting.png'
import ovs from './ovs.jpg'

const NavBar = () => {
  return (
    <nav>
      <div className="page">
        <header>
          <h3><img src={voting} height="40" width="40" style={{ position: 'relative' }} alt="login" /></h3>
          <Link to="NavBar"><button className="button"><FaHome />  Overview</button></Link>
          <Link to="votinglist"><button className="button"><FaList />  Ballot</button></Link>
          <Link to="users"><button className="button"><FaUsers />  Voters</button></Link>
          <Link to="LoginForm"><button className="nav-btn">
            <FaLock />
          </button>
          </Link>
        </header>
        <br></br>
        <br></br>
        <div className="p1">&nbsp; &nbsp; &nbsp; &nbsp;<FaHome />  Overview</div>
        <br></br>
        <center>
        <br></br>
        <br></br>
        <img src={ovs} height="600" width="1500" style={{ position: 'relative' }} alt="login" />
        <br></br>
        <br></br>
        <Link to="votinglist"><button className="button4"> GET STARTED </button></Link>
        </center>
      </div>
    </nav>
  );
}

export default NavBar;