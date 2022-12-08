import React, { useState } from "react";

import {
  Button,
  Checkbox,
  Form,
  Segment,
  Input,
  Icon,
} from "semantic-ui-react";

const LoginPage = () => {
  const [state, setState] = useState(false);
  const handleIcone = () => {
    setState((prevstate) => !prevstate);
  };

  return (
    <div
      style={{
        display: "flex",
        marginTop: "12%",
        // flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Segment raised stacked color="blue" padded="very" style={{ width: "30%" }}>
        <Form>
          <Form.Field>
            <label>Username</label>
            <Input
              iconPosition="left"
              icon="user"
              placeholder="Enter Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type={state ? "text " : "password"}
              placeholder="Enter Password"
              icon={
                <Icon
                  name={state ? "eye slash" : "eye"}
                  link
                  onClick={handleIcone}
                />
              }
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button color="blue" type="Sign-in">Sign in</Button> <br />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label>Forget Password</label>

            <label>Sign Up</label>
          </div>
        </Form>
      </Segment>
    </div>
  );
};

export default LoginPage;
