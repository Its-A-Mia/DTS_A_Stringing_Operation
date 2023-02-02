import "./Home.css";
import "../../utilityStyles/containers.css";

import * as React from "react";

const Home = () => {
  return (
    <main>
      <section className="grid">
        <div style={{ gridColumn: "1", border: "solid red 2px" }}>Hey</div>
      </section>
    </main>
  );
};

export default Home;
