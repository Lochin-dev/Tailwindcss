import React from 'react';
import { styles } from './util/style'
import { Billing, Contract, Home, Navbar, Statistics } from './components';

const App = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden' >
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Nome */}
      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          < Home />
        </div>
      </div>

      <div className={`bg-secondary  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
        </div>
      </div>

    </div>
  );
};

export default App;