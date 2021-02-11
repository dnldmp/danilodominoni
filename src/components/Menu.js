import React from 'react';
import PropTypes from 'prop-types';

function Menu({ href, title, subtitle }) {
  return (
    <a href={href}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </a>
  );
}

Menu.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Menu;
