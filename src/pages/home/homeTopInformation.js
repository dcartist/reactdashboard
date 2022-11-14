import React from "react";
import Headline from "../../components/Headline";
export default function HomeTopInformation() {
  return (
    <div className="container">
      <Headline title="React vs React Native"></Headline>
      <div className="row">
        <div className="col">
          <p>
            ReactJS is a JavaScript library, supporting both front-end web and
            being run on a server, for building user interfaces and web
            applications. It follows the concept of reusable components.
          </p>
          <p>
            React Native is a mobile framework that makes use of the JavaScript
            engine available on the host, allowing you to build mobile
            applications for different platforms (iOS, Android, and Windows
            Mobile) in JavaScript that allows you to use ReactJS to build
            reusable components and communicate with native components further
            explanation
          </p>
        </div>
      </div>
    </div>
  );
}
