import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";

function Service() {
  return (
    <section id="services" className="bg-[#f7f8fc] ">
      <div className="pt-28 px-4 container mx-auto text-gray-600">
        <div className="text-center space-y-5">
          <h1 className="lg:text-4xl text-3xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h1>
          <p className=" md:w-1/2 mx-auto text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            error qui obcaecati doloremque
          </p>
        </div>

        {/* category  */}
        <div className="py-12 md:w-4/5 mx-auto overflow-hidden ">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center gap-4 md:gap-8 mb-6">
              <Tab className="bg-white px-4 py-2">Parenting Skills</Tab>
              <Tab className="bg-white px-4 py-2">Feeling Stuck</Tab>
              <Tab className="bg-white px-4 py-2">Couple Counseling</Tab>
              <Tab className="bg-white px-4 py-2">Self-Confidence</Tab>
            </TabList>

            <TabPanel
              className={
                "flex justify-center items-center flex-col md:flex-row gap-8 mt-8"
              }
            >
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 lg:p-8  font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Couple Counseling
                </h3>
                <p className="mb-8 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sunt omnis ab accusantium vero perferendis.
                </p>
                <h3>Benefits</h3>
                <ul className="list-disc list-inside text-base">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full p-6 md:p-0">
                <img
                  src={serviceImg1}
                  alt=""
                  className="w-full h-auto rounded"
                />
              </div>
            </TabPanel>

            <TabPanel
              className={
                "flex justify-center items-center flex-col md:flex-row gap-8 mt-8"
              }
            >
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 lg:p-8  font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Parenting Skills
                </h3>
                <p className="mb-8 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sunt omnis ab accusantium vero perferendis.
                </p>
                <h3>Benefits</h3>
                <ul className="list-disc list-inside text-base">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full p-6 md:p-0">
                <img
                  src={serviceImg2}
                  alt=""
                  className="w-full h-auto rounded"
                />
              </div>
            </TabPanel>

            <TabPanel
              className={
                "flex justify-center items-center flex-col md:flex-row gap-8 mt-8"
              }
            >
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 lg:p-8  font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Feeling Stuck
                </h3>
                <p className="mb-8 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sunt omnis ab accusantium vero perferendis.
                </p>
                <h3>Benefits</h3>
                <ul className="list-disc list-inside text-base">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full p-6 md:p-0">
                <img
                  src={serviceImg3}
                  alt=""
                  className="w-full h-auto rounded"
                />
              </div>
            </TabPanel>

            <TabPanel
              className={
                "flex justify-center items-center flex-col md:flex-row gap-8 mt-8"
              }
            >
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 lg:p-8 font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Self-Confidence
                </h3>
                <p className="mb-8 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem sunt omnis ab accusantium vero perferendis.
                </p>
                <h3>Benefits</h3>
                <ul className="list-disc list-inside text-base">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full p-6 md:p-0">
                <img
                  src={serviceImg4}
                  alt=""
                  className="w-full h-auto rounded"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Service;
