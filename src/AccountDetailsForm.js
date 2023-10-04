import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";
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

function AccountDetailsForm() {
  return (
    <div className="container" >
      {/* style={{border:"1px solid #ecf1f5",background:"#ecf1f5", width:"100%", height:"600px"}} */}
      <br />
      <br />
      <br />
      <br/>
      <Card className="card">
        <div className="container">
          <br />
          <br />
          <h3 className="details " style={{ color: "#aad501" }}>
            <b>ACCOUNT DETAILS</b>
          </h3>
          <p>
            {" "}
            To update your details, filled out your relevent fields and click
            save{" "}
          </p>
          <br />
          <br />
          <div className="row" style={{ width: "100%", alignItems: "center" }}>
            <div className="col-6">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>First Name</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      placeholder=""
                      prefix={<UserOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Last Name</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      placeholder=""
                      prefix={<UserOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Email address</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      placeholder=""
                      prefix={<MailOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>
              </Form>
            </div>
            <div className="col-6">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Language</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      placeholder=""
                      type="dropdown"
                      prefix={<FlagOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  type="password"
                  controlId="formBasicPassword"
                >
                  <Form.Label>
                    <b>New password</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      type="password"
                      prefix={<KeyOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Conform new password</b>
                  </Form.Label>
                  <MDBInputGroup>
                    <Input
                      size="large"
                      type="password"
                      placeholder=""
                      prefix={<KeyOutlined />}
                    />
                  </MDBInputGroup>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AccountDetailsForm;
