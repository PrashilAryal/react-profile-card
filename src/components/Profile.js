import React, { Component } from "react";
import "../App.css";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "Prashil Aryal",
      specification: "Mentor/SSE",
      status: "active",
      progress: (70 / 100) * 164,
    };
  }
  render() {
    return (
      <div className="profile">
        <p className="profile__heading">Profile</p>
        <div className="profile__container">
          <div className="profile__container__card">
            <div className="profile__container__card__imgbox">
              <p className="profile__container__card__imgbox__name">
                {this.state.fullname.slice(0, 1)}
              </p>
            </div>
            <div className="profile__container__card__namebox">
              <h1>
                {this.state?.fullname || ""}
                <div
                  className={`profile__container__card__status ${this.state?.status}`}
                ></div>
              </h1>
              <p>{this.state?.specification || ""}</p>
              <div className="progress">
                <div
                  className="profile__container__card__progressbar"
                  style={{ width: this.state?.progress || 0 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
