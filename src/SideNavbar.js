import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import AccountDetailsForm from "./AccountDetailsForm";

const SideNavbar = (props) => {
  return (
    <div className="sidebar">
      <div className="row">
        <div className="col-md-3">
          <div
            style={{
              display: "flex",
              height: "100vh",
              overflow: "scroll initial",
            }}
          >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
              <CDBSidebarHeader
                prefix={<i className="fa fa-bars fa-large"></i>}
              >
                <a
                  href="/sidebar"
                  className="text-decoration-none"
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  Camille Torbey
                </a>
              </CDBSidebarHeader>
              <CDBSidebarMenuItem>
                <p href="/sidebar">Main Menu</p>
              </CDBSidebarMenuItem>
              <hr />
              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="book">
                      DOCUMENTS
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/shared" active ClassName="activeClicked">
                    <CDBSidebarMenuItem icon="share">
                      SHARED FOLDERS
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/account" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">ACCOUNT</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">
                      HELP
                    </CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
        </div>
        <div className="col-md-9">{props.children}</div>
      </div>
    </div>
  );
};
export default SideNavbar;
