import { Link } from "react-router-dom";
import { FaLock, FaHome, FaList, FaUsers } from "react-icons/fa";
import "../Styles/main.css";
import voting from './voting.png'
import { __DATA__ } from "./data";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar
} from "./styles";

const NavBar = () => {
  return (
    <nav>
      <div className="page">
        <header>
          <h3><img src={voting} height="40" width="40" style={{ position: 'relative' }} alt="login" /></h3>
          <Link to="navbar"><button className="button"><FaHome />  Overview</button></Link>
          <Link to="votinglist"><button className="button"><FaList />  Ballot</button></Link>
          <Link to="users"><button className="button"><FaUsers />  Voters</button></Link>
          <Link to="/loginform"><button className="nav-btn">
            <FaLock />
          </button>
          </Link>
        </header>
        <br></br>
        <br></br>
        <div className="p1">&nbsp; &nbsp; &nbsp; &nbsp;<FaHome />  Overview</div>
        <br></br>
        <Container>
          <MainContainer>
            {__DATA__.map(({ distance, colors }, i) => {
              return (
                <BarChartContainer key={i}>
                  <Number color={colors[1]}>{distance} Votes</Number>
                  <MakeBar height={distance * 2} colors={colors} />
                </BarChartContainer>
              );
            })}
          </MainContainer>
          <BlackLine />
        </Container>
      </div>
    </nav>
  );
}

export default NavBar;