import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <main className="index-page">
      <div className="index-page-content">
        <p className="index-page-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit
          amet nisl suscipit adipiscing bibendum est ultricies integer.
          Sollicitudin ac orci phasellus egestas tellus rutrum tellus
          pellentesque. Aenean sed adipiscing diam donec adipiscing tristique
          risus nec. Mauris ultrices eros in cursus turpis massa tincidunt.
          Egestas pretium aenean pharetra magna. Nibh sed pulvinar proin gravida
          hendrerit lectus. In eu mi bibendum neque egestas congue quisque
          egestas. Faucibus turpis in eu mi. Vel pharetra vel turpis nunc eget
          lorem dolor.
        </p>
        <br />
        <code>
          Please{" "}
          <Link to={"/register"} className="login">
            Register
          </Link>{" "}
          first and if successful you will automatically directed to{" "}
          <Link to={"/login"} className="login">
            Login
          </Link>{" "}
          page.
        </code>
        <br />
        <code>
          If you already have an account you can{" "}
          <Link to={"/login"} className="login">
            Login
          </Link>{" "}
          now.
        </code>
      </div>
    </main>
  );
}
