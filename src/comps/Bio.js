import React from "react";

export default function Bio() {
  return (
    <div>
      <div
        style={{
          marginTop: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "gray",
          }}
        >
          Who We Are
        </h2>
      </div>

      <div className="landingPage-div">
        <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-61bfe.appspot.com/o/IMG_9217.JPG?alt=media&token=c88c08fd-fc7b-4e83-bba5-5b72505f0890" />

        <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-61bfe.appspot.com/o/dylan%20sakura.jpeg?alt=media&token=1a3d4557-c93f-404e-b3cb-aaf04c95d0ce" />
      </div>
      <h5
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "gray",
          marginTop: "50px",
        }}
      >
        Coming Soon!
      </h5>
      <h5
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "gray",
          marginTop: "50px",
        }}
      >
        By Dylan & Hannah
      </h5>
    </div>
  );
}
