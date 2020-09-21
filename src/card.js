/** @jsx jsx */
import React from "react";
import { jsx, css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { FlexRow } from "./App";

var myDeity = require("random-greek-gods");

const MenuBar = (props) => (
  <FlexRow style={{ cursor: "pointer", gap: 20, height: 40 }}>
    <div style={{ fontSize: 25 }}>✩</div>
    <div style={{ fontSize: 25 }}>⌽</div>
    <div style={{ fontSize: 25 }}>〠</div>
  </FlexRow>
);

export const Card = (props) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <FlexRow style={{ fontWeight: 500, marginLeft: 20, marginRight: 20 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 50,
          border: "1px solid red",
          boxShadow: "inset 0px 0px 0px 2px white",
          background: `url(${props.url})`,
          backgroundSize: "32px 32px"
        }}
      />
      <h3
        style={{
          marginLeft: 16,
          flexGrow: 1,
          fontSize: 14,
          fontWeight: 600
        }}
      >
        {myDeity()}
      </h3>
      <button
        style={{
          flexGrow: 0,

          border: "none",
          backgroundColor: "transparent"
        }}
      >
        . . .{" "}
      </button>
    </FlexRow>
    .
    <div
      data-label="card"
      style={{
        minWidth: 200,
        maxWidth: 375,
        minHeight: 400,

        boxShadow: "0px 0px 5px 2px rgba(0,0,0,.1)",
        backgroundRepeat: "repeat",
        backgroundSize: "10px 10px",
        position: "relative"

        // backgroundColor: 'rgb(255,255,255,.3)'
      }}
    >
      <img src={props.url} width={375} />
      <div style={{ width: "100%", marginLeft: 16, marginRight: 16 }}>
        <MenuBar />
        <p>
          <span style={{ fontWeight: 400 }}>IN HOC SIGNO VINCES.</span>.
        </p>
      </div>
    </div>
  </div>
);
