import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, pw)
      .then(() => navigate("/admin/dashboard"))
      .catch((e) => alert(e.message));
  };

  const google = () => {
    signInWithPopup(auth, provider)
      .then(() => navigate("/admin/dashboard"))
      .catch((e) => alert(e.message));
  };

  return (
    <div className="card" style={{ maxWidth: 420 }}>
      <h3 style={{ color: "#D9BC61" }}>Admin Login</h3>
      <div style={{ marginTop: 8 }}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ marginTop: 8 }}>
        <input placeholder="password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button className="button" onClick={login}>Login</button>
        <button className="button" onClick={google}>Google</button>
      </div>
    </div>
  );
}
