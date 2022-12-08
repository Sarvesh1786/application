import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon } from "semantic-ui-react";
import { Navigate, useNavigate } from "react-router-dom";

// import { Link, NavLink } from "react-router-dom";

const Topmenu = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ activeItem: "" });
  const ItemName = {
    home: "/",
    signin: "/loginpage",
    signup: "/signpage",
  };
  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });

    navigate(ItemName[name]);
  };
  const { activeItem } = state;

  

  return (
    <>
      <Header as="h2">
        <Icon name="user" />
        <Header.Content>
          Learn More
          <Header.Subheader>Inspiration, But Not Limitation</Header.Subheader>
        </Header.Content>
      </Header>
      <Menu inverted>
        <Menu.Item
          name="home"
          lable="Home"
          active={activeItem === "home"}
          color="blue"
          onClick={handleItemClick}
        />
        <Menu.Item
          name="About"
          color="blue"
          active={activeItem === "About"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          name="friends"
          color="blue"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="notification"
            color="blue"
            onClick={handleItemClick}
            active={activeItem === "notification"}
          >
            <Icon.Group size="small">
              <Icon size="large" name="bell outline" />
            </Icon.Group>
          </Menu.Item>
          <Menu.Item
            name="signin"
            color="blue"
            active={activeItem === "signin"}
            onClick={handleItemClick}
          >
            <Icon.Group size="small">
              <Icon size="big" name="sign-in" />
            </Icon.Group>
            Sign In
          </Menu.Item>
          <Menu.Item
            name="signup"
            color="blue"
            active={activeItem === "signup"}
            onClick={handleItemClick}
          >
            <Icon.Group size="small">
              <Icon size="big" name="sign-out" />
            </Icon.Group>
            Sign Up
          </Menu.Item>

          <Menu.Item
            name="help"
            color="blue"
            active={activeItem === "help"}
            onClick={handleItemClick}
          >
            <Icon.Group size="small">
              <Icon size="big" name="question circle" />
            </Icon.Group>
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Topmenu;
