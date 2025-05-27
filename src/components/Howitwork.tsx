import React from "react";

const steps = [
  {
    id: "01",
    title: "Set disbursement Instructions",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: "02",
    title: "Assembly retrieves funds from your account",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: "03",
    title: "Assembly initiates disbursement",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: "04",
    title: "Customer receives funds payment",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

const Arrow1And3 = () => (
  <svg
    className="absolute left-1/2 top-[55px] -translate-x-1/2 hidden md:block"
    xmlns="http://www.w3.org/2000/svg"
    width="204"
    height="43"
    viewBox="0 0 204 43"
    fill="none"
  >
    <path
      d="M1 32.7207C1 32.7207 93.3 -38.8069 196 32.7207"
      stroke="#C2CBDE"
      strokeWidth="1.5"
      strokeDasharray="5 5"
    />
    <path
      d="M181.219 39.4988C181.219 39.4988 200.334 45.0252 202.156 38.7642C203.978 32.5031 202.611 26.0287 196.694 17.1587"
      stroke="#C2CBDE"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
  </svg>
);

const Arrow2 = () => (
  <svg
    className="absolute left-1/2 top-[55px] -translate-x-1/2 hidden md:block"
    xmlns="http://www.w3.org/2000/svg"
    width="204"
    height="43"
    viewBox="0 0 204 43"
    fill="none"
  >
    <path
      d="M0.481445 10.2583C0.481445 10.2583 92.7814 81.7859 195.481 10.2583"
      stroke="#C2CBDE"
      strokeWidth="1.5"
      strokeDasharray="5 5"
    />
    <path
      d="M180.7 3.47577C180.7 3.47577 199.816 -2.05055 201.638 4.21038C203.46 10.4713 202.093 16.9456 196.176 25.8154"
      stroke="#C2CBDE"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
  </svg>
);

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
          What’s the function
        </p>
        <h2 className="ttext-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Let’s see how it works
        </h2>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-left px-4">
              {/* SVG arrows */}
              {index < 3 && (
                <div className="absolute right-[-18px] top-[-30px] z-0">
                  {index === 1 ? <Arrow2 /> : <Arrow1And3 />}
                </div>
              )}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-md text-slate-900 font-semibold text-lg flex items-center justify-center">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mt-6">
                {step.title}
              </h3>
              <p className="text-base text-slate-500 mt-3">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
