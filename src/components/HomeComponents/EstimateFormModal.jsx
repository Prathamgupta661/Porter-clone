import React, { useState } from "react";

const EstimateFormModal = ({ open, onClose, service, onSubmit }) => {
  const [form, setForm] = useState({
    service: service?.value || "",
    pickup: "",
    drop: "",
    phone: "",
    name: "",
    userType: "",
  });

  const isValid =
    form.pickup.trim() &&
    form.drop.trim() &&
    form.phone.trim() &&
    form.name.trim() &&
    form.userType.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleUserType = (type) => {
    setForm((f) => ({ ...f, userType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit(form);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-3xl min-h-[520px] relative overflow-hidden animate-fade-in">
        {/* Left section */}
        <div className="bg-[#f4f7fe] flex flex-col justify-center items-start px-10 py-12 w-2/5 min-w-[220px]">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            {service?.label?.split(" ").map((w, i) => (
              <span key={i}>
                {w}
                <br />
              </span>
            ))}
          </h2>
          <p className="text-gray-500 text-base">
            Please fill in the details, so we can provide you with the best of
            our services
          </p>
        </div>
        {/* Right section */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8 gap-4 bg-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-gray-700 transition-colors"
          >
            &times;
          </button>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center my-6">
              <div className="flex-1 font-bold text-lg text-[var(--primary-color)] bg-blue-50 rounded-xl px-4 py-3">
                {service?.label}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Pickup Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pickup"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Enter pickup address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--primary-color)] bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Drop Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="drop"
                value={form.drop}
                onChange={handleChange}
                placeholder="Enter drop address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--primary-color)] bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--primary-color)] bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[var(--primary-color)] bg-white"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What describes you best? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`flex-1 border rounded-xl px-4 py-3 font-semibold text-base transition-all ${
                    form.userType === "personal"
                      ? "bg-blue-50 border-[var(--primary-color)] text-[var(--primary-color)]"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleUserType("personal")}
                >
                  Personal User
                </button>
                <button
                  type="button"
                  className={`flex-1 border rounded-xl px-4 py-3 font-semibold text-base transition-all ${
                    form.userType === "business"
                      ? "bg-blue-50 border-[var(--primary-color)] text-[var(--primary-color)]"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleUserType("business")}
                >
                  Business User
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="w-full mt-2 bg-gray-200 text-gray-400 font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-80 disabled:cursor-not-allowed enabled:bg-[var(--primary-color)] enabled:text-white enabled:shadow-lg enabled:hover:bg-[var(--primary-dark)]"
            >
              Get Estimate <span className="text-2xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EstimateFormModal;
