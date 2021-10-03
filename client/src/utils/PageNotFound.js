import React from "react";
import notFound from "../assets/notFound.svg";

export default function PageNotFound() {
  return (
    <div style={{ padding: "50px" }}>
      <img
        src={notFound}
        alt='NOT FOUND'
        style={{ width: "50%", display: "block", margin: "0 auto" }}
      />
      <h1 style={{ textAlign: "center", color: "#2F2E41" }}>
        هذه الصفحة غير موجودة
      </h1>
    </div>
  );
}
