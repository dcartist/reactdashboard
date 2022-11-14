import Accordion from "react-bootstrap/Accordion";

function InfoAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Items need to know</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              <div>npm start</div>
              <p>
                Runs the app in the development mode. Open http://localhost:3000
                to view it in your browser. The page will reload when you make
                changes. You may also see any lint errors in the console.
              </p>
              <p>ctrl c exits out of the program</p>
            </li>
            <li>
              To create a blank react app use npx create-react-app
              insertnameofapphere
            </li>
            <li>Your components will only work when wrapped in a SINGLE tag</li>
            <li>&#60;&#62; this is a empyty div shortcut &#60;/&#62;</li>
            <li>You must install packages before running the app</li>
            <li>where you write your functions matters</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>React</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default InfoAccordion;
