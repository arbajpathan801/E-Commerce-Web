import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="col-5" >
        
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            position: "relative",
            top: "250px",
            right: "220px",
          }}
          src="	https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          alt=""
        ></img>
        <h2
          style={{
            textAlign: "center",
            fontFamily:'sans-serif'
            
          }}
        >
          ABOUT
        </h2>
        <p className="text-secondary">
          lorem Est sit est consequat irure ad sit ut sint sint deserunt nulla
          ad aliqua qui. Sint ullamco duis proident reprehenderit quis
          exercitation laboris nostrud tempor commodo voluptate consequat irure.
          Dolore amet consectetur sit ea sunt et consectetur sit voluptate id
          incididunt cillum. Enim mollit id ad duis non labore. Laborum tempor
          non consectetur ut aliquip officia mollit Lorem culpa. Culpa sunt et
          minim cillum ea ipsum commodo non. Sunt sit minim sit sit id eiusmod
          consectetur occaecat fugiat culpa esse occaecat sit.Commodo pariatur
          cupidatat enim dolor tempor occaecat magna. Nulla ut ullamco
          adipisicing irure cillum dolor cupidatat ipsum id quis culpa ea.
          Exercitation officia esse irure dolor.em
        </p>
      </Container>
      <p className="text-center text-secondary">
        lorem Proident pariatur qui non sit culpa elit culpa nulla cupidatat sit
        officia mollit tempor. In exercitation incididunt laborum quis ullamco
        elit magna nisi cillum aliqua ad incididunt mollit ex. Laborum commodo
        est nostrud duis incididunt.Excepteur duis excepteur consectetur qui est
        qui consectetur commodo irure. Irure et sint consectetur quis nulla
        velit eu nostrud. Voluptate ea commodo aliquip id nostrud. Sit cillum
        duis est officia.
      </p>
    </div>
  );
};

export default About;
