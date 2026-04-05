import ErrorPageMessage from "../../assets/ErrorPage.png";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <section>
      <div className="container mx-auto px-2 flex flex-col items-center justify-center">
        <img src={ErrorPageMessage} alt="Error Message" />
        <div className="mt-5">
          <NavLink to="/">
            <button className="btn bg-black text-white">Back to Home</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
