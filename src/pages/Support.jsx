import React from "react";

const supportData = [
  {
    title: "CUSTOMER SUPPORT",
    img: "/assets/support-customer.svg", // Replace with your asset path
    content: (
      <>
        <a href="#" className="text-blue-700 font-semibold underline">Click here</a> to read our FAQs<br />
        For support with your bookings and other queries, email us at{" "}
        <a href="mailto:help@theporter.in" className="text-blue-700 font-semibold">help@theporter.in</a> or call us on{" "}
        <a href="tel:02244104410" className="text-blue-700 font-semibold">022 4410 4410</a>
      </>
    ),
  },
  {
    title: "PACKERS AND MOVERS",
    img: "/assets/support-packers.svg", // Replace with your asset path
    content: (
      <>
        For queries and support regarding your house shifting booking, email us at{" "}
        <a href="mailto:packermover@theporter.in" className="text-blue-700 font-semibold">packermover@theporter.in</a> or call us on{" "}
        <a href="tel:02244104444" className="text-blue-700 font-semibold">022 4410 4444</a> or{" "}
        <a href="tel:02262684444" className="text-blue-700 font-semibold">022 6268 4444</a>
      </>
    ),
  },
  {
    title: "ENTERPRISE SERVICES",
    img: "/assets/support-enterprise.svg", // Replace with your asset path
    content: (
      <>
        If you are an enterprise and are looking for goods transportation services for your business,{" "}
        <a href="#" className="text-blue-700 font-semibold underline">Click here</a> or mail us at{" "}
        <a href="mailto:help@theporter.in" className="text-blue-700 font-semibold">help@theporter.in</a>
      </>
    ),
  },
  {
    title: "DRIVE WITH PORTER",
    img: "/assets/support-drive.svg", // Replace with your asset path
    content: (
      <>
        Have a mini truck or bike? Earn money by fulfilling transportation orders assigned by Porter.{" "}
        <a href="#" className="text-blue-700 font-semibold underline">Click here</a> or reach us out on{" "}
        <a href="tel:02244104410" className="text-blue-700 font-semibold">022 4410 4410</a> (add your city code)
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0d13] to-black py-12 px-2 mt-[4rem]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 tracking-wide">HELP CENTER</h1>
        <p className="text-white text-center mb-8 text-lg font-semibold">
          Need assistance? We're happy to help, reach us out through the appropriate channels below.
        </p>
        <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
          {supportData.map((item, idx) => (
            <div key={item.title} className="flex items-center gap-4 p-6 min-h-[200px]">
              <img src={item.img} alt={item.title} className="w-24 h-24 object-contain" />
              <div>
                <div className="font-bold text-lg mb-1">{item.title}</div>
                <div className="text-gray-700 text-[15px] leading-relaxed">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
