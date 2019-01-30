import Head from "../components/head";
import Nav from "../components/nav";

export default () => (
  <React.Fragment>
    <Head />
    <Nav />
    Landing Page!
    <p>jsx scoped just for you</p>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: white;
      }
    `}</style>
  </React.Fragment>
);
