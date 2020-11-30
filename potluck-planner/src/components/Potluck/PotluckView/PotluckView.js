import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	getRequirements,
	claimRequirement,
} from "../../../actions/RequirementsActions.js";
import {
	getUsersByPotluckId,
	getCurrentUser,
} from '../../../actions/UserActions.js'
import { getPotluckById } from '../../../actions/PotluckActions.js'
import PotluckInfo from "./PotluckInfo.js";
import PotluckAttendee from "./PotluckAttendee";
import PotluckRequirements from "./PotluckRequirements.js";

import "./PotluckView.scss";

class PotluckView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	componentDidMount() {
		let { id } = this.props.match.params;
		this.props.getPotluckById(id);
		this.props.getUsersByPotluckId(id);
		this.props.getRequirements(id);
		this.props.getCurrentUser();
		this.setState({ loading: false });
	}



	render() {
		if (this.props.currentPotluck === undefined) {
			return <div>No Potluck</div>;
		}
		else if (this.props.currentPotluckUsers === undefined) {
			return <div>No Users</div>;
		}
		else if (this.props.currentRequirements === undefined) {
			return <div>No Requirements</div>;
		} else {
			let curUsers = this.props.currentPotluckUsers;
			let adminView = 1;
			for (var i = 0; i < curUsers.length; i++) {
				if (
					curUsers[i].userId === this.props.currentUser.id &&
					curUsers[i].role === 0
				) {
					adminView = 0;
					break;
				}
			}

			return (
				<div className="potluck-view-container">
					<PotluckInfo admin={adminView} />
					<PotluckAttendee admin={adminView} />

					<PotluckRequirements admin={adminView} />
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.potluckState.currentPotluck,
	currentPotluckUsers: state.userState.currentPotluckUsers,
	currentRequirements: state.requirementState.currentRequirements,
	currentUser: state.userState.currentUser,
});

const PotluckViewWithRouter = withRouter(PotluckView);
export default connect(mapStateToProps, {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
	claimRequirement,
	getCurrentUser,
})(PotluckViewWithRouter);
