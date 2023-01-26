import { Link } from "react-router-dom";
import { FaLock, FaHome, FaList, FaUsers } from "react-icons/fa";
import "../Styles/main.css";
import voting from './voting.png';
import icon from './icon.png';
import React, { useState, useCallback } from "react";

const functions = new Set();
const VotingList = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const increment2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const increment3 = useCallback(() => setCount3(count3 + 1), [count3]);
  const increment4 = useCallback(() => setCount4(count4 + 1), [count4]);
  const increment5 = useCallback(() => setCount5(count5 + 1), [count5]);
  const increment6 = useCallback(() => setCount6(count6 + 1), [count6]);

  functions.add(increment1);
  functions.add(increment2);
  functions.add(increment3);
  functions.add(increment4);
  functions.add(increment5);
  functions.add(increment6);

  return (
    <nav>
      <div className="page">
        <header>
          <h3><img src={voting} height="40" width="40" style={{ position: 'relative' }} alt="login" /></h3>
          <Link to="NavBar"><button className="button"><FaHome />  Overview</button></Link>
          <Link to="votinglist"><button className="button"><FaList />  Ballot</button></Link>
          <Link to="users"><button className="button"><FaUsers />  Voters</button></Link>
          <Link to="Loginform"><button className="nav-btn">
            <FaLock />
          </button>
          </Link>
        </header>
        <br></br>
        <br></br>
        <div className="p1">&nbsp; &nbsp; &nbsp; &nbsp;<FaList />  Ballot</div>
        <br></br>
        <div className="cover">
        <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />
          <center>{count1}</center>
          <center><button className="vote-btn" onClick={increment1}>
            Vote
          </button>
        </center>
          <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />
          <center>{count2}</center>
          <center><button className="vote-btn" onClick={increment2}>
            Vote
          </button>
        </center>
          <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />
          <center>{count3}</center>
          <center><button className="vote-btn" onClick={increment3}>
            Vote
          </button>
        </center>
          <div className="cover1">
          <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />
          <center>{count4}</center>
          <center><button className="vote-btn" onClick={increment4}>
            Vote
          </button>
        </center> 
          <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />
          <center>{count5}</center>
          <center><button className="vote-btn" onClick={increment5}>
            Vote
          </button>
        </center>
          <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />
          <center>{count6}</center>
          <center><button className="vote-btn" onClick={increment6}>
            Vote
          </button>
        </center>
          </div>
        </div>
      </div>
    </nav>
  );
  }

export default VotingList;