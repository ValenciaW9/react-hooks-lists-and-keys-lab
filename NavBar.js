import React from "react";
import ProjectItem from "./ProjectItem";

function MyComponent(props) {
  const links = ["home", "about", "links", "projects"];

  return (
    <div>
      <a href="https://www.google.com">google</a>
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </div>
  );
}

export default MyComponent;