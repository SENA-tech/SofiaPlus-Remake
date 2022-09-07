import React from "react";

import { TeamData } from "./data";

//css
import "./teaminfo.css";

export default function TeamInfo() {
  return (
    <div className="SF-Teaminfo-Base">
      <div className="SF-Teaminfo-Base-Title">
        <h1>Equipo de Desarrollo | Sofia Plus Remake</h1>
      </div>
      <hr className="hr" />
      <div className="SF-Teaminfo-Base-Content">
        {TeamData.map((data) => {
          return (
            <div class="card-press">
              <div class="head-press">
                <div class="circle-press"></div>
                <div class="img-press">
                  <img
                    width="500px"
                    src={data.image}
                  />
                </div>
              </div>
              <div class="description-press">
                <h3>{ data.name }</h3>
                <h4>{ data.main }</h4>
                <p>
                  { data.description }
                </p>
              </div>
              <div class="roles-press">
                <h4>roles</h4>
                <p> { data.roles } </p>
              </div>
              <div class="contact-press">
                <a href="">contact</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
