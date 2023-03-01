import React, { Component } from "react";
import {  FaHiking, FaShuttleVan} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
   
      {
        icon: <FaHiking />,
        title: "Deliver",
        info:
          "Your package will be intently delivered to you on the day of the order."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Delivery",
        info:
          "If you buy more than 10 items. The delivery is for free!!"
      },
     
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
