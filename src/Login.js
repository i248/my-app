import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBInputGroup,
} from "mdb-react-ui-kit";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "reactstrap";
import { HiOutlineMail } from "react-icons/bi";
import { CDBSidebarMenuItem } from "cdbreact";
import {
  FlagOutlined,
  KeyOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Select } from "antd";

function Login() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "550px" }}
          >
            <MDBBtn size="lg" style={{ backgroundColor: "#01b8c8" }}>
              <h5> HAVE AN ACCOUNT? LOGIN</h5>
            </MDBBtn>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <p1 className="">
                Online access to your HR documents for as long as you need{" "}
              </p1>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Email address:</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      placeholder=""
                      prefix={<MailOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  type="password"
                  controlId="formBasicPassword"
                >
                  <Form.Label>
                    <b>password:</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      type="password"
                      prefix={<KeyOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>
              </Form>
              <div className="d-flex justify-content-between mx-4 mb-4">
                <a href="!#">Forgot email address?</a>
                <a href="!#">Forgot password?</a>
              </div>
              <MDBBtn size="lg" href="/sidebar" style={{ backgroundColor: "#aad501" }}>
                Login
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
