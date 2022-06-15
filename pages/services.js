import React from "react";
import Service from "./service";

const services = () => {
  const services = [
    {
      id: 1,
      title: "Graphic design",
      desc: "I provide eye catching design for you",
    },
    {
      id: 2,
      title: "Web design",
      desc: "I provide eye catching design for you",
    },
    {
      id: 3,
      title: "App design",
      desc: "I provide eye catching design for you",
    },
    {
      id: 4,
      title: "Illustration Design",
      desc: "I provide eye catching design for you",
    },
    {
      id: 5,
      title: "Web Development",
      desc: "I provide eye catching design for you",
    },
    {
      id: 1,
      title: "Influencing expert",
      desc: "I provide eye catching design for you",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-6xl my-20">Services I provide</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default services;
