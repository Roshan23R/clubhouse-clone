import React from "react"
import style from "../style/phoneConfirm.module.css"
import { Link } from "react-router-dom"

export default function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer}>
            
        <Link exact to="/" className={style.backBtn}>
          <img src="/images/arrow.png" alt="/" />
        </Link>
            
        <div className="text-center">
          <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
            {" "}
            Enter the code we just texted you
          </h1>
          <input
            type="text"
            className="form-control"
            style={{
              width: "100%",
              margin: "auto",
              textAlign: "center",
              outline: "none",
            }}
          />
          <p className="mt-2">
            {" "}
            Didn't receive it ? <span>Tap to resend it.</span>
          </p>
            </div>
            
        <Link
          exact
          to="/allow_notificatin"
          className="primaryBtn d-flex align-items-center justify-content-space-evenly"
        >
          <span style={{ marginRight: "10px" }}>Next</span>
          <img src="/images/nextArrowIcon.svg" alt="/" />
        </Link>
   
      </div>
    );
}