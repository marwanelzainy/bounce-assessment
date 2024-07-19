import { Route, Routes } from "react-router-dom";
import BookingPlaced from "./pages/BookingPlaced";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "375px",
          height: "780px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route path="/booking-placed" element={<BookingPlaced />} />
        </Routes>
      </div>
    </main>
  );
}
