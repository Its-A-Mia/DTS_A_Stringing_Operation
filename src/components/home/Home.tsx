import './Home.css';

import * as React from 'react';

const Home = () => {
  return (
    <main className="container">
      <header>
        <div className="icon"></div>
        <div className="burger-menu"></div>
      </header>
      <section>
        <h1 className="heading-landing">Restringing Rackets Made Easy</h1>
        <div className="center-aligned-text">
          <p>
            The Denver Tennis Stringing crew are your local racket-stringing experts. The strength you used to snap that
            string is only matched by our confidence in delivering you a fresh, perfectly tensioned set of them in a
            matter of hours. We service all of downtown Denver, from Uptown to RiNo.
          </p>
        </div>
      </section>
      <button></button>
    </main>
  );
};

export default Home;
