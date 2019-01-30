import Head from "../components/head";

export default () => (
  <React.Fragment>
    <Head />
    Hello world
    <p>jsx scoped!</p>
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
