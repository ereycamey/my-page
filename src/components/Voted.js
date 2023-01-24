import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import {FaLock, FaHome, FaList, FaUsers } from "react-icons/fa";
import "../Styles/main.css";
import voting from './voting.png';

const Voted= () =>{
  return (
    <nav>
        <div className="page">
        <header>
            <h3><img src={voting} height="40" width="40" style={{position: 'relative'}} alt="login"/></h3>
            <Link to="navbar"><button className="button"><FaHome/>  Overview</button></Link>
            <Link to="votinglist"><button className="button"><FaList/>  Ballots</button></Link>
            <Link to="users"><button className="button"><FaUsers/>  Voters</button></Link>
            <Link to="/loginform"><button className="nav-btn">
            <FaLock />
          </button>
          </Link>
        </header>
        <br></br>
        <br></br>
        <div className="p1">&nbsp; &nbsp; &nbsp; &nbsp;<FaUsers />  Voters</div>
        <br></br>
        <br></br>
    <center>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Admin</td>
          <td>admin</td>
          <td><button className="button2"> Edit </button> </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Grace Hopper</td>
          <td>Voter 1</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Margaret Hamilton</td>
          <td>Voter 2</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Joan Clarke</td>
          <td>Voter 3</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Lili Cruz</td>
          <td>Voter 4</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jenny Fernandez</td>
          <td>Voter 5</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Josh Afi</td>
          <td>Voter 6</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Gab Fernandez</td>
          <td>Voter 7</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>9</td>
          <td>Vic Tinaliga</td>
          <td>Voter 8</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>Erica De Vera</td>
          <td>Voter 9</td>
          <td><button className="button2"> Edit </button></td>
        </tr>
      </tbody>  
    </Table>
     </center>
     </div>
        </nav>
  );
  }

export default Voted;