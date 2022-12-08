import React from "react";

import {
  Button,
  Header,
  Icon,
  Form,
  Image,
  Table,
  Segment,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const ProfileUser = () => {
  const colors = ["blue"];
  const langOption = [
    { text: "English", value: "English" },
    { text: "Hindi", value: "Hindi" },
    { text: "Punjabi", value: "Punjabi" },
    { text: "Tamil", value: "Tamil" },
    { text: "Gujrati", value: "Gujrati" },
  ];
  return (
    <div>
      <Segment>
        {colors.map((color) => (
          <Table color={color} key={color}>
            <Table.Header>
              <Table.Row verticalAlign="top">
                <Table.HeaderCell>
                  <Segment
                    compact
                    color="blue"
                    style={{
                      marginLeft: "30px",
                      
                      textAlign: "center",
                    }}
                  >
                    <Header as="h2">
                      <Image
                        circular
                        src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                      />
                      <Header.Content>
                        Junior G
                        <Header.Subheader>Softwaer Engineer </Header.Subheader>
                      </Header.Content>
                    </Header>
                    <Segment.Inline width>
                      <Button>Upload Image</Button>
                    </Segment.Inline>
                  </Segment>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Segment
                    color="blue"
                    padded="very"
                    compact
                    // raised
                    // stacked
                    style={{
                      // display: "flex",
                      // justifyContent: "flex-end",
                      marginRight: "50px",
                      //   marginTop: "59px",
                      height: "634px",
                    }}
                  >
                    <Form>
                      <Form.Group unstackable widths={1}>
                        <Form.Input
                          label="First name"
                          placeholder="First name"
                        />
                        <Form.Input label="Last name" placeholder="Last name" />
                      </Form.Group>
                      <Form.Group widths={1}>
                        <Form.Group inline>
                          <label>Gander</label>
                          <Form.Field
                            control={Radio}
                            label="Male"
                            name="status"
                          />
                          <Form.Field
                            control={Radio}
                            label="Female"
                            name="status"
                          />
                          <Form.Field
                            control={Radio}
                            label="Other"
                            name="status"
                          />
                        </Form.Group>
                      </Form.Group>
                      <Form.Group>
                        <Form.Input label="Address" placeholder="Address" />
                        <Form.Input label="Phone" placeholder="Phone" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Input label="Username" placeholder=" Username" />
                        <Form.Input
                          width={1}
                          label="Languages"
                          placeholder=" Select"
                          options={langOption}
                          control={Select}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Input
                          label="Email "
                          placeholder="Email Address"
                        />
                        <Form.Input label="Password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Field
                          width={16}
                          control={TextArea}
                          label="Massage"
                          placeholder="Tell us more your massage..."
                        />
                      </Form.Group>
                      <Form.Checkbox label="I agree to the Terms and Conditions" />
                      <Button type="submit" color="blue">
                        Update
                      </Button>
                    </Form>
                  </Segment>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        ))}
      </Segment>
    </div>
  );
};
export default ProfileUser;
