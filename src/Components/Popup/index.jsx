import React, { useState } from "react";
import "./style.css";

const Popup = ({ setPopup, data, click }) => {
  const description = data.find((item) => item.show.id === click);
  const initialData = {
    name: "",
    age: "",
    email: "",
    seat: "",
  };

  const [form, setForm] = useState(initialData);

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(form.name));
    localStorage.setItem("age", JSON.stringify(form.age));
    localStorage.setItem("email", JSON.stringify(form.email));
    localStorage.setItem("seat", JSON.stringify(form.seat));
    setPopup(false);
  }

  function onChange(key, value) {
    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  }

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">{description.show.name}</div>
        <div>
          <form onSubmit={(e) => onSubmit(e)} className="form-container">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={(e) => onChange("age", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            <input
              type="number"
              placeholder="Seats"
              value={form.seat}
              onChange={(e) => onChange("seat", e.target.value)}
            />
            <button> Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
