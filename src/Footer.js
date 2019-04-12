import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.contactInfo.map((info, index) => {
          return <li key={index}>{info}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
