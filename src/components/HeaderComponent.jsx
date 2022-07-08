import React from "react";
import NavBar from "~/components/header/NavBar";

import classNames from "classnames";
import PropTypes from "prop-types";

export default function HeaderComponent({ fixed, absolute, zIndex }) {
  return (
    <div
      className={classNames("w-full", "top-0", "left-0", {
        fixed,
        absolute,
      })}
      style={{ zIndex }}
    >
      <NavBar />
    </div>
  );
}

HeaderComponent.propTypes = {
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  zIndex: PropTypes.number,
};

HeaderComponent.defaultProps = {
  fixed: true,
  absolute: false,
  zIndex: 100,
};
