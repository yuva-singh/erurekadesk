import React from 'react';
import { Link } from 'react-router-dom';


function Logo() {
  return (
    <div className="dropdown text-end">
    <Link
      to="/"
      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {/* <img
        src="https://github.com/mdo.png"
        alt="mdo"
        width={32}
        height={32}
        className="rounded-circle"
      /> */}
      <i className='bi bi-person-circle fs-3'></i>
    </Link>
    <ul className="dropdown-menu text-small">
      <li>
        <Link className="dropdown-item" to="/register">
          Register
        </Link>
      </li>
      <li>
      </li>
      <li>
        <Link className="dropdown-item" to="/">
          Sign out
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Logo