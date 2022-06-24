import { useState } from "react";
import { SignpostOutlined } from "@mui/icons-material";

const Login = () => {
  const [formData, setFormData] = useState({
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-24 mb-6">
        <div className="flex">
          <SignpostOutlined style={{ fontSize: "36px" }} />
          <h1 className="text-4xl font-bold">Login</h1>
        </div>
        <p className="text-2xl text-gray-500 font-bold mt-2">
          Login to your account
        </p>
      </section>

      <section className="flex justify-center">
        <form className="flex flex-col w-80" onChange={onChange}>
          <input
            type="email"
            className="border-2 rounded pl-2 outline-none mb-2"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="border-2 rounded pl-2 outline-none mb-2"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
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

export default Login;
