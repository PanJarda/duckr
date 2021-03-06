import React from "react";
import PropTypes from "prop-types";
import { Navigation } from "../../components";
import { connect } from "react-redux";
import { container, innerContainer } from "./styles.css";

class MainContainer extends React.Component {
  propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  render() {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>{this.props.children}</div>
      </div>
    );
  }
}

export default connect(state => ({ isAuthed: state.isAuthed }))(MainContainer);
