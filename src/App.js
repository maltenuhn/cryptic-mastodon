/** @jsx jsx */
import React from "react";
import { jsx, css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { Deck } from "./deck";
import { Card } from "./card";

import "./styles.css";
import { ExpansionArrow } from "./icons";

const s = {
  padded: { paddingLeft: 8, paddingRight: 8 }
};

const TopMenu = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexGrow: 0.5,
  "& > span": {
    transition: "all 1s linear",
    cursor: "pointer"
  },
  "& > span:hover": {
    flexGrow: 1,
    backgroundColor: "green"
  }
});

const PhotoGrid = (props) => (
  <div
    style={{
      display: "flex",
      gap: 20,
      width: 600,
      marginTop: 20,
      marginBottom: 20,
      padding: 8
    }}
  >
    {props.children}
  </div>
);

const Photo = (props) => (
  <div
    css={{
      backgroundSize: "contain",
      backgroundSize: "20px 20px",
      borderRadius: 50,
      height: 50,
      width: 50,
      background: `url(${props.url})`,
      transition: "all .2s linear",
      "&:hover": {
        transform: "scale(1.1)",
        backgroundSize: "contain"
      }
    }}
  />
);

const ScrollablePhotoGrid = (props) => (
  <div
    style={{
      overflowX: "scroll",
      position: "absolute",
      left: 0,
      right: 0
    }}
  >
    <PhotoGrid>
      <Photo
        url={
          "https://images.generated.photos/F3N3OT3PEQgszg8GLS1dfQf2vRkjoXCwff5cjs_l5Oc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMDY3NDEuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/fqisoBYuCsobJnXNh6CAxBLv4ErstueHips0ddRMrD4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDk2MjAuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/GMbjdhAJrCKhDT8C7jMCJVHMjSc0S0A-nXcfNTPvCOo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAyNjMwOTEuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/f0Uen3tXgTUbdKLBhgRC5Vk5m2lNGsUAxMz4Y8yOE9E/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NDI0MTUuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/gsx5n_96xTlUxl4YjkBFUwgXi3LLH23ifpiwisDoX-Q/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwODc5ODYuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/LCOHlb4KV8SFHypgVUD1qDLn-n1q5eLckMfnVklfIUo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NDQxMDkuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/LCOHlb4KV8SFHypgVUD1qDLn-n1q5eLckMfnVklfIUo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NDQxMDkuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/LCOHlb4KV8SFHypgVUD1qDLn-n1q5eLckMfnVklfIUo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NDQxMDkuanBn.jpg"
        }
      />
      <Photo
        url={
          "https://images.generated.photos/LCOHlb4KV8SFHypgVUD1qDLn-n1q5eLckMfnVklfIUo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NDQxMDkuanBn.jpg"
        }
      />
    </PhotoGrid>
  </div>
);

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  paddingTop: 20,
  paddingBottom: 40
});
const BottomMenu = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
});

export const FlexRow = styled.div({
  display: "flex",
  alignItems: "center"
});

export default function App() {
  return (
    <div
      id="sampleBody"
      style={{
        background: "lightblue",
        width: "100%",
        height: "100%",
        position: "absolute"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 375,
          margin: 40,
          boxShadow: "0px 10px 35px 5px rgba(0,0,0,.5)",
          borderRadius: 5,
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
          overflow: "hidden"
        }}
      >
        <TopMenu>
          <span>␐</span>
          <span style={{ fontWeight: "bold" }}>␖</span>
          <span>␖</span>
          <span>␖</span>
          <span>␖</span>
        </TopMenu>
        <div
          id="scrollView"
          style={{
            minHeight: 100,
            margin: "auto",
            overflowX: "hidden"
          }}
        >
          <ScrollablePhotoGrid />
        </div>
        <div
          css={{
            position: "absolute",
            bottom: 0,
            zIndex: 99999,
            left: 0,
            right: 0,
            backgroundColor: "white",
            boxShadow: "inset 0px 1px 0px 0px grey",
            display: "grid",
            gridTemplateColumns: "60px 60px 120px 60px 60px",

            height: 40,
            "&  div:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(255,220,100)"
            }
          }}
        >
          <FlexRow
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgb(55,220,100)",
              justifyContent: "center"
            }}
          >
            🃈
          </FlexRow>
          <FlexRow
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgb(55,220,100)",
              justifyContent: "center"
            }}
          >
            🃌
          </FlexRow>
          <FlexRow
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgb(55,220,100)",
              justifyContent: "center"
            }}
          >
            🀑
          </FlexRow>
          <FlexRow
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgb(55,220,100)",
              justifyContent: "center"
            }}
          >
            🃈
          </FlexRow>
          <FlexRow
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgb(0,220,100)",
              justifyContent: "center"
            }}
          >
            🀚
          </FlexRow>
        </div>
        <div
          id="scrollView"
          style={{
            width: 375,
            height: 400,

            // margin: "auto",
            overflowY: "scroll",
            position: "relative"
          }}
        >
          <Content>
            {[
              "https://upload.wikimedia.org/wikipedia/commons/8/88/Bonifacio_bembo%2C_regina_di_spade.jpg",
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Wands13.jpg/220px-Wands13.jpg",
              "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
              "https://upload.wikimedia.org/wikipedia/en/0/0d/Wands13.jpg",
              "https://upload.wikimedia.org/wikipedia/en/3/33/Swords14.jpg"
            ].map((item) => (
              <Card url={item}>{item}</Card>
            ))}
          </Content>
          <BottomMenu />
        </div>
      </div>
    </div>
  );
}
