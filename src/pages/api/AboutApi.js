import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function AboutApi() {
  return (
    <div className="mb-5 mt-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About API</Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              This api is using the{" "}
              <a
                href="https://rickandmortyapi.com/"
                rel="noreferrer" 
                target="_blank"
              >
                https://rickandmortyapi.com/
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>About Axios</Accordion.Header>
          <Accordion.Body>
            <p>
              Axios is a promise-based HTTP Client for node.js and the browser.
              It is isomorphicit (can run in the browser and nodejs with the
              same codebase).
            </p>
            <p>
              Location of the cheatsheet is <br></br>
              <a
                href="https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index"
                rel="noopener"
                target="_blank"
              >
                https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
