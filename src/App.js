/** @jsx jsx */
import "./styles.css";

import React from "react";
import { jsx, css, Global } from "@emotion/core";
import styled from "@emotion/styled";

var myDeity = require("random-greek-gods");

const User = styled.span({ fontWeight: 600 });
const Comment = styled.span({ fontWeight: 400, color: "grey", marginLeft: 12 });

const MenuBar = (props) => (
  <FlexRow style={{ cursor: "pointer", gap: 20, height: 40 }}>
    <div style={{ fontSize: 25 }}>✩</div>
    <div style={{ fontSize: 25 }}>⌽</div>
    <div style={{ fontSize: 25 }}>〠</div>
  </FlexRow>
);

const s = {
  padded: { paddingLeft: 8, paddingRight: 8 }
};

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
        <p className="description">
          <span style={{ fontFamily: "garamond", fontSize: 15 }}>
            Quando quegli stati, che si acquistano, sono abituati a vivere con
            le loro leggi e in libertà, a volerli mantenere, ci sono tre modi:
            il primo, raderne al suolo le città; l’altro, andarvi ad abitare
            personalmente; il terzo,{" "}
            <b>
              lasciarli vivere con le loro leggi, traendone un tributo e
              creandovi dentro un’amministrazione fatta di pochi individui che
              te li conservino amici.
            </b>
            <a style={{ color: "black", textDecoration: "none" }} href="">
              #macchiavelli
            </a>
            &nbsp;
            <a style={{ color: "black", textDecoration: "none" }} href="">
              #goodadvice
            </a>
            &nbsp;
            <a style={{ color: "black", textDecoration: "none" }} href="">
              #selfhelp
            </a>
            &nbsp;
          </span>
        </p>

        <p>
          <span style={{ fontWeight: 400 }}>
            <User>{myDeity()}</User>
            <Comment>Uva uvam vivendo varia fit?</Comment>
          </span>
        </p>
        <p>
          <span style={{ fontWeight: 400 }}>
            <User>{myDeity()}</User>
            <Comment>Ita est.</Comment>
          </span>
        </p>
        <p>
          <span style={{ fontWeight: 400 }}>
            <User>{myDeity()}</User>
            <Comment>In hoc signo vinces.</Comment>
          </span>
        </p>
      </div>
    </div>
  </div>
);

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
