import React from "react";

export default function Menu(props) {
  const [href, title, subtitle] = props;
  return (
    <a href={href}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </a>
  );
}
