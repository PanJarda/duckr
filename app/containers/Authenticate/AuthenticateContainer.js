import React from "react";
import PropTypes from "prop-types";
import { Authenticate } from "../../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../redux/modules/users";

class AuthenticateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth() {
    this.props
      .fetchAndHandleAuthedUser()
      .then(() => this.context.replace("feed"));
  }

  render() {
    return (
      <div>
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.props.error}
          onAuth={this.handleAuth} />
      </div>
    );
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired
};

AuthenticateContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(
  state => ({ isFetching: state.isFetching, error: state.error }),
  dispatch => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer);
