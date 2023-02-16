import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [fromRegister, setFromRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.fromRegister) {
      setFromRegister(true);
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if(data.token){
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="register-wrapper">
      {fromRegister && <p className="register-p">Registration successful, now you can login</p>}
      <form onSubmit={handleLogin}>
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

        <button type="submit" onClick={handleLogin}>Login</button>

        <p className="register-p">
          Don't have any account yet? please{" "}
          <Link to={"/register"} className="login">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
