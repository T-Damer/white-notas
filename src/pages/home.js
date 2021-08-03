import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <Link to="/about">About this page</Link>
    </Fragment>
  );
};

export default Home;
