import React from "react";
import { Link } from "react-router-dom";

function SharedFolder() {
  return (
    <div className="contaner">
      <br />
      <br />
      <h4>NO ACTIVE SHARED FOLDERS</h4>
      <br />
      <div
        className="container"
        style={{
          border: "1px solid #ecf1f5",
          height: "500px",
          backgroundColor: "#ecf1f5",
        }}
      >
        <br />
        <br />
        <div
          className="container"
          style={{
            border: "1px solid #d9edf6",
            height: "200px",
            backgroundColor: "#d9edf6",
          }}
        >
          <br />
          <p1>No shared folder found.</p1>
          <br />
          <p1>
            shared folder allow to you shared docunts stored in your vault with
            anyone you choose. you can control who has access
            <br />
            to your documnets and for how long . Guest will recive an invitation
            email with password and instruction to access the file{" "}
          </p1>
          <p className="text" style={{ color: "black" }}>
            <b>
              To create a new shared folder,{" "}
              <Link to="">
                <span>click here.</span>
              </Link>{" "}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SharedFolder;
