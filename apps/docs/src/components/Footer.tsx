// CustomFooter.js

import React from 'react';

function CustomFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Footer Content */}
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="col">
            {/* Footer Links */}
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
