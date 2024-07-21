// Desc: Experience component for the resume
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Exp = () => {
  const [compName, setcompName] = useState('');
  const [posTitle, setPosTitle] = useState('');
  const [mainTask, setmainTask] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [data, setdata] = useState([]);
  const [editId, seteditId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setdata(
        data.map((item) =>
          item.id === editId
            ? {
                compName,
                posTitle,
                mainTask,
                startDate,
                endDate,
                id: editId,
              }
            : item
        )
      );
      setdata(null);
    } else {
      setdata([
        ...data,
        {
          compName,
          posTitle,
          mainTask,
          startDate,
          endDate,
          id: Date.now(),
        },
      ]);
      setcompName('');
      setPosTitle('');
      setmainTask('');
      setstartDate('');
      setendDate('');
    }
  };
  const handleEditid = (id) => {
    const item = data.find((item) => item.id === id);
    setcompName(item.compName);
    setPosTitle(item.posTitle);
    setmainTask(item.mainTask);
    setstartDate(item.startDate);
    setendDate(item.endDate);
    seteditId(id);
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
              <Link className="nav-link" to="/">
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
          <div className="input1">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              value={compName}
              onChange={(e) => setcompName(e.target.value)}
              required
            />
          </div>
          <div className="input1">
            <label>Position Title</label>
            <input
              type="text"
              placeholder="Position Title"
              value={posTitle}
              onChange={(e) => setPosTitle(e.target.value)}
              required
            />
          </div>
          <div className="input2">
            <label>Main Tasks</label>
            <input
              type="text"
              placeholder="Main Tasks"
              value={mainTask}
              onChange={(e) => setmainTask(e.target.value)}
              required
            />
          </div>
          <div className="input3">
            <label>Start Date</label>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setstartDate(e.target.value)}
              required
            />
          </div>

          <div className="input4">
            <label>End Date</label>
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setendDate(e.target.value)}
              required
            />
          </div>
          <button className="btn">Submit</button>
        </form>

        {data.map((item) => (
          <div key={item.id}>
            <h2>
              Submitted Data:
              {item.compName}
              {item.posTitle}
              {item.mainTask}
              {item.startDate}
              {item.endDate}
            </h2>
            <button onClick={() => handleEditid(item.id)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Exp;
