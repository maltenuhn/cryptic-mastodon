/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import styled from "@emotion/styled";

import React from "react";

export const ExpansionArrow = (props) => (
  <svg
    style={{ transform: "scale(.8)" }}
    width="9"
    height="6"
    viewBox="0 0 9 6"
    open=""
  >
    <path
      d="M4.50009 6L-5.24537e-07 1.26364e-06L9 4.76837e-07L4.50009 6Z"
      fill="currentcolor"
    ></path>
  </svg>
);
