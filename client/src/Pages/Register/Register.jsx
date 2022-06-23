import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, password, password2 } = formData;
  return (
    <>
      <Navbar />
      <section>
        <h1></h1>
        <p>Please create an account</p>
      </section>

      <section>
        <form>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Enter your firstName"
          />
        </form>
      </section>
    </>
  );
};

export default Register;
