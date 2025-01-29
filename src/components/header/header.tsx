import React from "react";

const Header = () => {
  return (
    <div
      className="app py-10 min-h-screen text-center text-gray-900"
      style={{  minHeight: "100vh", textAlign: "center", color: "#1f2937" }}
    >
      {/* Top Section */}
      <div
        className="circle"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#ccc",
          borderRadius: "50%",
          margin: "auto",
          marginBottom: "0%",
          marginBlock: "1.5vh",
        }}
      ></div>
      <div
        className="heading"
        style={{
          fontWeight: "bolder",
          fontSize: "4vmax",
          margin: "auto",
        }}
      >
        <h1>
          Sign up to receive updates for <br />
          the latest event announcements
        </h1>
      </div>

      <div
        className="email-input-container flex items-center mt-4"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderRadius: "50px",
          padding: "15px 25px 10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "7.6vh",
        }}
      >
        <input
          type="email"
          placeholder="Enter your e-mail address"
          className="email-input p-2 border border-gray-300 rounded-l-md focus:outline-none"
          style={{
            flexGrow: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "16px",
            color: "#000000",
          }}
        />
        <button
          className="email-submit-button p-2  text-white rounded-r-md"
          style={{
            backgroundColor: "#e5efff",
            border: "none",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            cursor: "pointer",
            borderRadius: "50%",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#869dbd")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e5efff")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </button>
      </div>

      {/* Footer Section */}
      <footer
        className="footer mt-10 text-center"
        style={{
          fontSize: "xx-large",
          background: "#7c9acb",
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "black",
          borderRadius: "30px",
        }}
      >
        <p>
          Made with <span role="img" aria-label="love">❤️</span> by GDG-GTBIT
        </p>
        <p>Copyright &copy;2025, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Header;
