import { Button } from "antd";
import React from "react";

const HeaderComponent = ({
  bagsNumber,
  incrementBagsNumber,
  decrementBagsNumber,
}) => {
  return (
    <section
      style={{
        height: "28%",
        borderBottom: "1px solid lightgrey",
        padding: 20,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div>
        Booking storage at: <br />
        <span style={{ fontWeight: "bold" }}>Cody's Cookie Store</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>Number of bags</span>
        <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
          <Button
            disabled={bagsNumber <= 1}
            type="primary"
            onClick={decrementBagsNumber}
          >
            -
          </Button>
          <span>{bagsNumber}</span>
          <Button
            disabled={bagsNumber >= 3}
            type="primary"
            onClick={incrementBagsNumber}
          >
            +
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
