import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regStatus, setRegStatus] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log("data object:", data);

      if (data.success) {
        setRegStatus("Registration successful, now you can login");
        navigate("/login", { state: { fromRegister: true } });
      } else {
        setRegStatus(data.error);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="register-wrapper">
      <form onSubmit={handleRegister}>
        {regStatus && <p>{regStatus}</p>}
        <input
          type="text"
          placeholder="Fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleRegister}>
          Register
        </button>

        <p className="register-p">
          Already have an account?{" "}
          <Link to={"/login"} className="login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
