import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Header, Image, Icon, Input } from "semantic-ui-react";
// import { Link, NavLink } from "react-router-dom";

const Usermenu = () => {
  const [state, setState] = useState({ activeItem: "" });

  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  const { activeItem } = state;

  return (
    <>
      <Segment
        basic
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Header as="h2">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />
          <Header.Content>
            Junior G<Header.Subheader>Softwaer Engineer </Header.Subheader>
          </Header.Content>
        </Header>
        <Header> Hello Shailendra kumar G</Header>
      </Segment>
      <Menu inverted>
        <Menu.Item
          name="Daseboard"
          lable="Daseboard"
          active={activeItem === "Daseboard"}
          color="blue"
          onClick={handleItemClick}
        />
        <Menu.Item
          name="About"
          lable="About"
          color="blue"
          active={activeItem === "About"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          lable="Friends"
          color="blue"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="notification"
            lable="notification"
            color="blue"
            onClick={handleItemClick}
            active={activeItem === "notification"}
          >
            <Icon.Group size="small">
              <Icon size="large" name="bell outline" />
            </Icon.Group>
            Notification
          </Menu.Item>
          <Menu.Item
            name="profile"
            lable="Profile"
            color="blue"
            active={activeItem === "profile"}
            onClick={handleItemClick}
          >
            <Icon.Group size="small">
              <Icon size="big" name="circle outline" />
              <Icon name="user" />
            </Icon.Group>
            Profile
          </Menu.Item>

          <Menu.Item
            name="logout"
            lable="Log Out"
            color="blue"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          >
            <Icon.Group size="small">
              <Icon size="big" name="logout" />
            </Icon.Group>
            Logout
          </Menu.Item>

          <Menu.Item
            name="help"
            lable="Help"
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

export default Usermenu;
