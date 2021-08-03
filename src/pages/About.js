import { Fragment } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Fragment>
      <h1>About page</h1>
      <Link to="/">Go home</Link>
    </Fragment>
  );
};

export default About;
