import Accordion from "react-bootstrap/Accordion";
import classpicture from "../images/class.png"
import functionpicture from "../images/functioncomponent.png"
function InfoAccordion() {
  return (
    <Accordion flush>
      <Accordion.Item >
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
            <li>When creating components they begin with Capital Letters</li>

            
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Functions</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              <div>Types of functions:</div>
              <p>
              Functional Components: Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters, we will discuss this later in the tutorial. Below example shows a valid functional component in React: 
              </p>

              <img src={functionpicture}></img>
              <p>Class Components: The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to other class components. We can use JavaScript ES6 classes to create class-based components in React. Below example shows a valid class-based component in React: </p>
              <img src={classpicture}></img>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default InfoAccordion;
