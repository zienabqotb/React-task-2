import { useState } from "react";
import "./login.css";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: userName,
      email: userEmail,
      phone: userPhone,
    };
    if (userName && userEmail && userPhone) {
      console.log(user);
      setUserName("");
      setUserEmail("");
      setUserPhone("");
    }
  };

  return (
    <main>
      <section className="all-info">
        <section className="img-cover">
          <img src="photo.png" alt="" />
        </section>
        <div className="personal-inputs">
          <div className="title">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="div-input">
              <label>Name</label>
              <input
                type="text"
                placeholder="e.g. Stephen King"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
              />
            </div>
            <div className="div-input">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                value={userEmail}
              />
            </div>
            <div className="div-input">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="e.g. +1 234 567 890"
                onChange={(e) => {
                  setUserPhone(e.target.value);
                }}
                value={userPhone}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </section>
    </main>
  );
}
