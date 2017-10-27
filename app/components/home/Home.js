import React from "react";
import { container, title, slogan } from "./styles.css";

const Home = props => {
  return (
    <div className={container}>
      <p className={title}>{"Duckr"}</p>
      <p className={slogan}>
        {
          "The realtime, cloudbased, modular, scalable, growth hack, social platform. In the cloud."
        }
      </p>
    </div>
  );
};

export default Home;
