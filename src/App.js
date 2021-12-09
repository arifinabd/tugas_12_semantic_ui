import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Message,
  Segment,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid columns="equal">
        <Grid.Column width={6}></Grid.Column>
        <Grid.Column>
          <Header color="teal" textAlign="center">
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
            Member Login
          </Header>
          <Segment>
            <Form>
              <Form.Field>
                <Input
                  icon="user"
                  iconPosition="left"
                  placeholder="Email address"
                />
              </Form.Field>
              <Form.Field>
                <Input icon="lock" iconPosition="left" placeholder="Password" />
              </Form.Field>
              <Form.Field>
                <center>
                  <Checkbox label="I Agree to the terms conditions" />
                </center>
              </Form.Field>
              <Button fluid color="teal">
                Login
              </Button>
            </Form>
          </Segment>
          <Message attached="bottom">
            <center>
              Tidak Punya Akun ? Silahkan <a href="/">Register</a>
            </center>
          </Message>
        </Grid.Column>
        <Grid.Column width={6}></Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
