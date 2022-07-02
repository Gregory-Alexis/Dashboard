import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { register, reset } from "../../redux/features/auth/authslice";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      throw new Error("Password do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-24 mb-6">
        <div className="flex">
          <PersonOutlineIcon style={{ fontSize: "36px" }} />
          <h1 className="text-4xl font-bold">Resgister</h1>
        </div>
        <p className="text-2xl text-gray-500 font-bold mt-2">
          Please create an account
        </p>
      </section>

      <section className="flex justify-center">
        <form className="flex flex-col w-80">
          <input
            type="text"
            className="border-2  rounded pl-2 outline-none mb-2"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onChange}
            placeholder="Enter your firstName"
          />
          <input
            type="text"
            className="border-2  rounded pl-2 outline-none mb-2"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
            placeholder="Enter your lastName"
          />
          <input
            type="email"
            className="border-2 rounded pl-2 outline-none mb-2"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="border-2 rounded pl-2 outline-none mb-2"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
          />
          <input
            type="password"
            className="border-2 rounded pl-2 outline-none mb-2"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm your password"
          />
          <div>
            <button
              type="submit"
              className="bg-black w-full p-2 rounded text-center text-white"
              onSubmit={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
