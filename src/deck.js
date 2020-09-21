/** @jsx jsx */
import React from "react";
import { jsx, css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { Card } from "./card";

export const Deck = (props) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    {props.cards.map((x) => (
      <Card title={x.title} url={x.url} />
    ))}
  </div>
);
