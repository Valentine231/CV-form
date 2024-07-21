// Desc: Education component
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Edu = () => {
  const [schName, setschName] = useState('');
  const [TOS, setTOS] = useState('');
  const [DOS, setDOS] = useState('');
  const [Degree, setDegree] = useState('');
  const [data, setdata] = useState([]);
  const [editId, seteditId] = useState();

  const handleform = (e) => {
    e.preventDefault();
    if (!setdata) return;
    if (editId) {
      setdata(
        data.map((item) =>
          item.id === editId
            ? {
                TOS,
                DOS,
                Degree,
                id: editId,
              }
            : item
        )
      );
      setdata(play);
    } else {
      setdata([
        ...data,
        {
          TOS,
          DOS,
          Degree,
          id: Date.now(),
        },
      ]);
      setTOS('');
      setDOS('');
      setDegree('');
    }
  };
  const handleEditid = (id) => {
    const item = data.find((item) => item.id === id);
    setTOS(item.TOS);
    setDOS(item.DOS);
    setDegree(item.Degree);
    seteditId(id);
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
          <div className="input1">
            <label>School Name</label>
            <input
              type="text"
              placeholder="School Name"
              value={schName}
              onChange={(e) => setschName(e.target.value)}
              required
            />
          </div>
          <div className="input2">
            <label>Title of Study</label>
            <input
              type="text"
              placeholder="Title of Study"
              value={TOS}
              onChange={(e) => setTOS(e.target.value)}
              required
            />
          </div>
          <div className="input3">
            <label>Date of Study</label>
            <input
              type="date"
              placeholder="Date of Study"
              value={DOS}
              onChange={(e) => setDOS(e.target.value)}
              required
            />
          </div>
          <div className="input4">
            <label>Degree</label>
            <input
              type="text"
              placeholder="Degree"
              value={Degree}
              onChange={(e) => setDegree(e.target.value)}
              required
            />
          </div>
          <button className="btn">Submit</button>
        </form>

        {data.map((play) => (
          <div key={play.id}>
            <h2>
              Submitted Data:
              {play.TOS}
              {play.DOS}
              {play.Degree}
            </h2>
            <button onClick={() => handleEditid(play.id)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Edu;
