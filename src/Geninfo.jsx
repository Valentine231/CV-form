// Desc: General information form
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Geninfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [data, setdata] = useState([]);
  const [editId, seteditId] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setdata(
        data.map((item) =>
          item.id === editId
            ? {
                name,
                email,
                phone,
                address,
                city,
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
          name,
          email,
          phone,
          address,
          city,
          id: Date.now(),
        },
      ]);
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setCity('');
    }
  };

  const handleEditid = (id) => {
    const item = data.find((item) => item.id === id);
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setAddress(item.address);
    setCity(item.city);
    seteditId(id);
  };

  return (
    <>
      <div className="conatianer">
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
        <form onSubmit={handlesubmit}>
          <div>
            <h1>General information</h1>
          </div>
          <div className="input1">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input2">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input3">
            <label>Phone</label>
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input4">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input4">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <button className="btn">Submit</button>
        </form>
        {data.map((item) => (
          <div>
            <h2>
              submited Data:
              {item.name}
              {item.email}
              {item.phone}
              {item.address}
              {item.city}
            </h2>
            <button onClick={() => handleEditid(item.id)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Geninfo;
