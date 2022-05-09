import React from 'react';
import { CFooter } from '@coreui/react';

const AppFooter = () => {
  return (
    <CFooter className="Footer1">
      <div className="footer2">
        <a
          href="https://kickrtechnology.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KICKR TECHNOLOGY
        </a>
        <span className="ms-1">&copy;2022 Creative Labs</span>
      </div>
      <div className=" footer2 ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://kickrtechnology.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KICKR ADMINPANEL
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
