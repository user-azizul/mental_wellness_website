import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";

const servicesData = [
  {
    title: "Couple Counseling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt omnis ab accusantium vero perferendis.",
    benefits: [
      "Improved Communication",
      "Conflict Resolution",
      "Deeper Understanding",
    ],
    image: serviceImg1,
  },
  {
    title: "Parenting Skills",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt omnis ab accusantium vero perferendis.",
    benefits: [
      "Positive Discipline Techniques",
      "Empathy Building",
      "Healthy Boundaries",
    ],
    image: serviceImg2,
  },
  {
    title: "Feeling Stuck",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt omnis ab accusantium vero perferendis.",
    benefits: ["Goal Setting", "Finding Purpose", "Increased Motivation"],
    image: serviceImg3,
  },
  {
    title: "Self-Confidence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt omnis ab accusantium vero perferendis.",
    benefits: [
      "Improved Self-Esteem",
      "Positive Thinking",
      "Assertiveness Training",
    ],
    image: serviceImg4,
  },
];

function ServicePanel({ title, description, benefits, image }) {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row gap-8 mt-8">
      <div className="w-full md:w-1/2 bg-white rounded-lg p-6 lg:p-8 font-secondary">
        <h3 className="text-3xl font-semibold text-primary mb-4">{title}</h3>
        <p className="mb-8 text-base">{description}</p>
        <h3>Benefits</h3>
        <ul className="list-disc list-inside text-base">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-full p-6 md:p-0">
        <img
          src={image}
          alt={`${title} illustration`}
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
}

function Service() {
  return (
    <section id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto text-gray-600">
        <div className="text-center space-y-5">
          <h1 className="lg:text-4xl text-3xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h1>
          <p className="md:w-1/2 mx-auto text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            error qui obcaecati doloremque.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="py-12 md:w-4/5 mx-auto overflow-hidden">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center gap-4 md:gap-8 mb-6">
              {servicesData.map((service, index) => (
                <Tab
                  key={index}
                  className="bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded cursor-pointer"
                >
                  {service.title}
                </Tab>
              ))}
            </TabList>

            {servicesData.map((service, index) => (
              <TabPanel key={index}>
                <ServicePanel
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  image={service.image}
                />
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Service;
