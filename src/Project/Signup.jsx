import React from "react";
import { useFormik } from "formik";
import "./Style.css";

function Signup() {
  const formik = useFormik({
    initialValue: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },

    onSubmit: (values) => {
      console.log("submitted", values);
    },
    validate: (values) => {
      let error = {};
      console.log(values);
      if (values.username.length < 5) {
        error.username = "too short";
      } else if (values.username[1] >= "A" && values.username[1] <= "Z") {
        error.username = "First letter should be capital";
      }
      if (/^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,3}$/.test(values.email)) {
        error.email = "Invalid email Format";
      }
      if (
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,16}$/.test(
          values.password
        )
      ) {
        error.password = "Invalid password Format";
      }
      if (/^[0-9]{10}$/.test(values.phone)) {
        error.phone = "Invalid Phone No.";
      }

      return error;
    },
  });
  // const [user, setUser] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  // })
  // const handleChange=(e) => {
  //     const{ name,value} = e.target;
  //     console.log(name, value);
  //     setUser({...user, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     localStorage.setItem("user", JSON.stringify(user));
  //     setUser({ username: "", email: "", password: "", phone:"" });
  // }

  console.log(formik);

  return (
    <>
      <div className="container">
        <form action="" className="form" onSubmit={formik.handleSubmit}>
          <h3 style={{ color: "blue", marginBottom: "12px" }}>Sign Up</h3>


          <label>User Name</label> <br />
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="please enter your name"
            required
          />{" "}
          <div>
          {formik.errors.username?
          <span>{formik.errors.username}</span>:null } </div>
          <br />


          <label>Email Id:</label> <br />
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="please enter your email"
            required
          />{" "}
          <div>
          {formik.errors.email?
          <span>{formik.errors.email}</span>:null } </div>
          <br />


          <label>Password</label> <br />
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="please enter your password"
            required
          />{" "}
          <div>
          {formik.errors.password?
          <span>{formik.errors.password}</span>:null } </div> <br />

          
          <label>Phone No.</label> <br />
          <input
            type="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="please enter your phone"
            required
          />{" "}
          <div>
          {formik.errors.phone?
          <span>{formik.errors.phone}</span>:null } </div>
          <br />
          <p style={{ marginBottom: "6px" }}>
            If you already have a account <a href ="#" style={{ color: "blue" }}>Login</a>
          </p>{" "}
          <br />
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
