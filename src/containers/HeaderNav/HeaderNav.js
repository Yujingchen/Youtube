import React, { Component } from "react";
import { Image, Menu, Form, Input, Icon } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/logo.jpg";
import { Link, withRouter } from "react-router-dom";

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  onInputChange = event => {
    this.setState({
      query: event.target.value
    });
  };
  onSubmit = () => {
    const escapedSearchQuery = encodeURI(this.state.query);
    this.props.history.push(`/result?search_query=${escapedSearchQuery}`);
  };

  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Link to="/">
            <Image src={logo} size="tiny" />
          </Link>
        </Menu.Item>
        <Menu.Menu className="nav-container">
          {/* searchbar with semaintic Input element */}
          <Menu.Item className="search-input">
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <Input
                  placeholder="Search"
                  size="small"
                  action="Go"
                  vaule={this.state.query}
                  onChange={this.onInputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon className="header-icon" name="video camera" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="grid layout" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="chat" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="alarm" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Image src="http://via.placeholder.com/80x80" avatar />
            </Menu.Item>
          </Menu.Menu>
          {/* Menu.Menu is the child of Menu, Menu.Menu can have arbitary Menu.Menu inside it */}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(HeaderNav);
