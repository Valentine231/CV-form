// Desc: Experience component for the resume
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Exp = () => {
  const [compName, setcompName] = useState('');
  const [posTitle, setPosTitle] = useState('');
  const [mainTask, setmainTask] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      compName,
      posTitle,
      mainTask,
      startDate,
      endDate,
      id: Date.now(),
    };

    console.log(data);
  };

  return (
    <>
      <div>
        <nav
          className="navbar >
          <div className="
          collapse="true"
          id="navbarNav"
        >
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
        </nav>
      </div>

      <div className="main">
        <div>
          <h1>Experience</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Company Name"
            value={compName}
            onChange={(e) => setcompName(e.target.value)}
          />
          <label>Position Title</label>
          <input
            type="text"
            placeholder="Position Title"
            value={posTitle}
            onChange={(e) => setPosTitle(e.target.value)}
          />
          <label>Main Tasks</label>
          <input
            type="text"
            placeholder="Main Tasks"
            value={mainTask}
            onChange={(e) => setmainTask(e.target.value)}
          />
          <label>Start Date</label>
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setstartDate(Number(e.target.value))}
          />
          <label>End Date</label>
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setendDate(Number(e.target.value))}
          />
          <button>Submit</button>
          <button>Edit</button>
        </form>
      </div>
    </>
  );
};

export default Exp;
