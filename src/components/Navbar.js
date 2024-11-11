import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Logo_TB.png';
import { formatDate } from '../utils/dateUtils';

function Navbar() {
  const today = formatDate(new Date());

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo ở góc trái */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="100%" height="100%" className="d-inline-block align-text-top" />
        </a>
        {/* Ngày hiển thị theo định dạng Thứ dd/mm/yyyy */}
        <div className="ml-auto text-muted">
          {today}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
