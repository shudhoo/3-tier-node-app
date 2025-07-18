import React from "react";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "100vh" }}>
      <div className="card shadow-lg p-5 border-0 rounded-4 text-center" style={{ maxWidth: "30rem" }}>
        <h2 className="text-success fw-bold mb-3">
          3-Tier Application Deployed Successfully!
        </h2>
        <p className="text-muted fw-semibold">
          Developed & Deployed by <span className="text-primary">Shudhodhan</span> 🚀
        </p>
      </div>
    </div>
  );
}

export default Home;

