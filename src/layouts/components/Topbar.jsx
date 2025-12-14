import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { topbarData } from './topbarData';
import './Topbar.scss';

const Topbar = ({ toggleSidebar }) => {
  return (
    <Navbar className="topbar" expand="lg">
      <Container fluid>
        <Button
          variant="outline-light"
          className="topbar__toggle d-lg-none me-2"
          onClick={toggleSidebar}
        >
          ☰
        </Button>
        <Navbar.Brand href="#home" className="topbar__brand">
          {topbarData.title}
        </Navbar.Brand>
        
        <div className="topbar__actions">
          {topbarData.actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="sm"
              onClick={action.onClick}
              className="topbar__action-btn"
            >
              {action.icon && <action.icon className="me-1" />}
              {action.label}
            </Button>
          ))}
        </div>
      </Container>
    </Navbar>
  );
};

export default Topbar;