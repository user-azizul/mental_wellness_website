import React from "react";

const stepsData = [
  {
    number: 1,
    title: "Fill Form",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde!",
  },
  {
    number: 2,
    title: "Get Matched",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde!",
  },
  {
    number: 3,
    title: "Schedule",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, unde!",
  },
];

function Step({ number, title, description }) {
  return (
    <div className="relative bg-white text-center rounded-lg p-6 flex-1">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
        {number}
      </div>
      <h3 className="text-lg font-medium mt-8">{title}</h3>
      <p className="my-2 text-sm">{description}</p>
    </div>
  );
}

function WorkingSteps() {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-img">
      <div className="absolute inset-0 bg-heroBg/75"></div>
      <div className="container relative mx-auto px-4 py-20">
        <div className="text-white text-center mb-20">
          <h2 className="text-3xl font-bold font-secondary mb-4">
            How It Works
          </h2>
          <p className="text-base md:w-1/2 w-full mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, ad. Odio sequi qui corporis nesciunt.
          </p>
        </div>
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8 text-gray-700">
          {stepsData.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkingSteps;
