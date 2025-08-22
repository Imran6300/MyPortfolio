import { useState } from "react";
import Css from "./ContactContainer.module.css";

const FormContainer = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const resData = await response.json();

      if (response.status === 200) {
        setResult("✅ Message sent successfully!");
      } else {
        setResult(resData.message || "❌ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Something went wrong.");
    }

    form.reset();
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      {/* Hidden access key for Web3Forms */}
      <input
        type="hidden"
        name="access_key"
        value="3df0ea1f-78ac-4cf4-9825-bda0cb5ac628"
        accesskey
      />

      <div className="mb-4">
        <label className="form-label text-white">Full Name</label>
        <input
          type="text"
          name="name"
          className={`form-control ${Css.formInpt}`}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-white">Email</label>
        <input
          type="email"
          name="email"
          required
          className={`form-control ${Css.formInpt}`}
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-white">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className={`form-control ${Css.formInpt}`}
        />
      </div>

      <button type="submit" className={`btn ${Css.submitbtn}`}>
        Send
      </button>

      {result && <p className="text-white mt-2">{result}</p>}
    </form>
  );
};

export default FormContainer;
