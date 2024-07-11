// Desc: Education component
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Edu = () => {
  const [schName, setschName] = useState('');
  const [TOS, setTOS] = useState('');
  const [DOS, setDOS] = useState('');
  const [Degree, setDegree] = useState('');

  const handleform = (e) => {
    e.preventDefault();

    const data = {
      schName,
      TOS,
      DOS,
      Degree,
    };
    console.log(data);
  };
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Geninfo">
                  Gen info
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Edu">
                  Education
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Exp">
                  Experience
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="main">
        <form onSubmit={handleform}>
          <div>
            <h1>Eduction information</h1>
          </div>
          <label>School Name</label>
          <input
            type="text"
            placeholder="School Name"
            value={schName}
            onChange={(e) => setschName(e.target.value)}
          />
          <label>Title of Study</label>
          <input
            type="text"
            placeholder="Title of Study"
            value={TOS}
            onChange={(e) => setTOS(e.target.value)}
          />
          <label>Date of Study</label>
          <input
            type="text"
            placeholder="Date of Study"
            value={DOS}
            onChange={(e) => setDOS(e.target.value)}
          />
          <label>Degree</label>
          <input
            type="text"
            placeholder="Degree"
            value={Degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button type="reset">Edit</button>
        </form>
      </div>
    </>
  );
};

export default Edu;
