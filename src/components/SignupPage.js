import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  TextArea,
  Segment,
  Form,
  Radio,
} from "semantic-ui-react";
import { postData } from "../serviecs";

const langOption = [
  { text: "English", value: "English" },
  { text: "Hindi", value: "Hindi" },
  { text: "Punjabi", value: "Punjabi" },
  { text: "Tamil", value: "Tamil" },
  { text: "Gujrati", value: "Gujrati" },
];

//*********** Function *************************************************************** */

const SignupPage = () => {
  const initialState = {
    fname: "",
    lname: "",
    gender: "",
    address: "",
    phone: "",
    username: "",
    language: "",
    email: "",
    password: "",
    massage: "",
    termcondition: "",
  };

  const [entry, setEntry] = useState(initialState);

  const [errors, setErrors] = useState({});

  const {
    fname,
    lname,
    gender,
    address,
    phone,
    username,
    language,
    emai,
    password,
    massage,
    termcondition,
  } = entry;

  //*********************** On Submit function  ******************************************************* */

  const onSubmit = async () => {
    console.log(entry);
    const errors = {};

    //*********************** OValidations  ******************************************************* */

    if (entry.fname === "") errors.fname = "Firstname is required *";

    if (entry.lname === "") 
      errors.lname = "Lastname is required *";
  

    if (entry.gender === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        gender: " This field is required * ",
      }));
    }

    if (entry.address === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        address: " Address is required *",
      }));
    }
    //*******************  Phone ************************************ */
    const phone_regex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (entry.phone === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        phone: "Phone is required *",
      }));
    } else if (
      !entry.phone ||
      entry.phone.length > 10 ||
      (entry.phone.length < 10 && !entry.phone.match(phone_regex))
    ) {
      setErrors((prevstate) => ({
        ...prevstate,
        phone: "Phone is not valid *",
      }));
    }

    //*********************** Username******************************** */

    const username_regex = /^[a-z][a-z0-9_\.]+$/;

    if (entry.username === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        username: " Username is required *",
      }));
    } else if (!entry.username || !entry.username.match(username_regex)) {
      setErrors((prevstate) => ({
        ...prevstate,
        username: " Username is not valid onliy use (a-z,0-9,. , _) *",
      }));
    }

    if (entry.language === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        language: "This field is required *",
      }));
    }
    //************************** Email validate ******************************* */

    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (entry.email === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        email: "Email is  required *",
      }));
    } else if (!entry.email || !entry.email.match(regex)) {
      setErrors((prevstate) => ({
        ...prevstate,
        email: "Email is not valid *",
      }));
    }
    //************************** Password validate *******************************
    const password_regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (entry.password === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        password: "Password is required *",
      }));
    } else if (!entry.password || !entry.password.match(password_regex)) {
      setErrors((prevstate) => ({
        ...prevstate,
        password: "Password is not valid *",
      }));
    }
    //************************************ Massages  ************************************ */
    const massage_regex = /^[a-z0-9 ]{1,200}$/i;

    if (entry.massage === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        massage: "This field is required",
      }));
    } else if (!entry.massage || !entry.massage.match(massage_regex)) {
      setErrors((prevstate) => ({
        ...prevstate,
        massage: "Message upto 200 letters only used",
      }));
    }

    if (entry.termcondition === "") {
      setErrors((prevstate) => ({
        ...prevstate,
        termcondition: "This field is required",
      }));
    }
    setErrors((prevState) => ({
      ...prevState,
      ...errors,
    }));

    if (Object.keys(errors).length === 0) {
      let data = await postData(entry);
      console.log(data);
    }
  };
  //*****************  On Change ****************************************************** */
  const onChange = (e) => {
    const { name, value } = e.target;
    setEntry((preventry) => ({ ...preventry, [name]: value }));
    //***** Error Store ***** */
    setErrors((prevState) => {
      const copy = { ...prevState };
      delete copy[name];
      return { ...copy };
    });
  };

  const radioChange = (e, data) => {
    // console.log(data);
    if (data.name === "termcondition") {
      setEntry((preventry) => ({
        ...preventry,
        [data.name]: data.checked ? true : false,
      }));
    } else setEntry((preventry) => ({ ...preventry, [data.name]: data.value }));

    //***** Error Store ***** */

    setErrors((prevState) => {
      const copy = { ...prevState };
      delete copy[data.name];
      return { ...copy };
    });
  };

  //*****************************  Return ****************************************************** */
  console.log(errors);
  return (
    <div
      style={{
        display: "flex",
        padded: "very",
        justifyContent: "flex-start",
        backgroundSize: "cover",
        backgroundImage: `url(
          
            "https://demos.creative-tim.com/material-kit-react/static/media/bg-presentation.88963029.jpg"
          )`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Segment
        color="blue"
        padded="very"
        compact
        style={{
          marginRight: "50px",
          height: "634px",
        }}
      >
        {/* //******************************* Form *********************************************** */}
        <Form>
          <Form.Group unstackable widths={1}>
            <Form.Input
              width={7}
              label="First name"
              placeholder="First name"
              name="fname"
              value={entry.fname}
              onChange={onChange}
              error={errors.fname ? errors.fname : null}
            />

            <Form.Input
              width={7}
              label="Last name"
              placeholder="Last name"
              name="lname"
              value={entry.lname}
              onChange={onChange}
              error={errors.lname ? errors.lname : null}
            />
          </Form.Group>
          <Form.Field error={errors.gender ? errors.gender : null}>
            <Form.Group widths={1} inline>
              <label>Gender</label>
              <Form.Field
                control={Radio}
                label="Male"
                value="male"
                name="gender"
                checked={entry.gender === "male"}
                onChange={radioChange}
              />
              <Form.Field
                control={Radio}
                label="Female"
                value="female"
                name="gender"
                checked={entry.gender === "female"}
                onChange={radioChange}
              />
              <Form.Field
                control={Radio}
                label="Other"
                value="other"
                name="gender"
                checked={entry.gender === "other"}
                onChange={radioChange}
              />
              {errors.gender && (
                <span
                  style={{
                    color: "#9f3a38",
                    fontWeight: "bold",
                    border: "1px solid #9f3a38",
                    borderRadius: "5px",
                    padding: "2px",
                  }}
                >
                  {errors.gender}
                </span>
              )}
            </Form.Group>
          </Form.Field>
          <Form.Group>
            <Form.Input
              width={7}
              label="Address"
              placeholder="Address"
              name="address"
              value={entry.address}
              onChange={onChange}
              error={errors.address ? errors.address : null}
            />
            <Form.Input
              width={7}
              label="Phone"
              placeholder="Phone"
              name="phone"
              value={entry.phone}
              onChange={onChange}
              error={errors.phone ? errors.phone : null}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width={4}
              label="Username"
              placeholder=" Username"
              name="username"
              value={entry.username}
              onChange={onChange}
              error={errors.username ? errors.username : null}
            />
            <Form.Input
              // width={2}
              label="Languages"
              placeholder=" Select"
              options={langOption}
              control={Select}
              name="language"
              value={entry.language}
              onChange={radioChange}
              error={errors.language ? errors.language : null}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width={7}
              label="Email "
              placeholder="Email Address"
              name="email"
              value={entry.email}
              onChange={onChange}
              error={errors.email ? errors.email : null}
            />
            <Form.Input
              width={7}
              label="Password"
              placeholder="Password"
              name="password"
              value={entry.password}
              onChange={onChange}
              error={errors.password ? errors.password : null}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              width={16}
              control={TextArea}
              label="Massage"
              placeholder="Tell us more your massage..."
              name="massage"
              value={entry.massage}
              onChange={onChange}
              error={errors.massage ? errors.massage : null}
            />
          </Form.Group>
          <Form.Checkbox
            label="I agree to the Terms and Conditions"
            name="termcondition"
            value="termcondition"
            onChange={radioChange}
            checked={entry.termcondition}
            error={errors.termcondition ? errors.termcondition : null}
          />
          <Button type="submit" color="blue" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default SignupPage;
