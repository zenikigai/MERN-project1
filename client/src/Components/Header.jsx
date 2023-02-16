import { Link } from "react-router-dom";
import useAnimatedLogo from "../hooks/useAnimatedLogo";

export default function Header() {
  const text = useAnimatedLogo();
  return (
    <header className="header">
      <div className="logo-wrap">
        <h1>
          <Link to={"/"} className="logo">
            {text}
          </Link>
        </h1>
      </div>
    </header>
  );
}
