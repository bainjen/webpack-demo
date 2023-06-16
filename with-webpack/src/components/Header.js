import React from "react";

// const Header = (props) => {
//   const { links, ...rest } = props;
//   const clickLinks = links.map((link, i) => {
//     return React.createElement("a", { key: i, href: link.path }, link.name);
//   });

//   return React.createElement(
//     "header",
//     { ...rest },
//     React.createElement("h2", null, "Donuts make me go nuts!"),
//     React.createElement("nav", null, ...clickLinks)
//   );
// };

// export default Header;

const Header = ({ links, ...rest }) => {
  const clickLinks = links.map((link, i) => {
    return (
      <a key={i} href={link.path}>
        {link.name}
      </a>
    );
  });

  return (
    <header>
      <h2>Donuts make me go nuts!</h2>
      <nav>{clickLinks}</nav>
    </header>
  );
};

export default Header;
