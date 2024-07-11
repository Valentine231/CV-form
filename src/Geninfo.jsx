// Desc: General information form
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Geninfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      address,
      city,
      id: Date.now(),
    };
    console.log(data);
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
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button>Submit</button>
          <button>Edit</button>
        </form>
      </div>
    </>
  );
};

export default Geninfo;
