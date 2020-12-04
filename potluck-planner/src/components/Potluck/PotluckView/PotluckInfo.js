import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	deletePotluck,
	getPotlucks,
} from "../../../actions/PotluckActions.js";
import { removeAttendee } from '../../../actions/AttendeeActions.js'
import "./PotluckView.scss";

class PotluckInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
			attendee: "non-attendee",
		};
	}
	componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		} else {
			this.setState({ ...this.state, attendee: "attendee" });
		}
	}

	onDeletePotluck = async (e) => {
		await this.props.deletePotluck(this.props.currentPotluck.id);
		await this.props.getPotlucks();
		this.props.history.push("/protected");
	};

	onRemoveSelf = async (e) => {
		let attendee = {
			potluckId: this.props.currentPotluck.id,
			userId: this.props.currentUser.id,
		};
		await this.props.removeAttendee(attendee);
		await this.props.getPotlucks();
		this.props.history.push("/protected");
	};
	render() {
		return (
			<div className="potluck-info-container">
				<img
					className="potluck-info-img"
					src={require("./imgs/family-meal.jpg")}
					alt="img"
				/>
				<div className="potluck-info">
					{/* <h1>{this.props.currentPotluck.locationName}</h1> */}
					<div>
						<h1 className="event-name">{this.props.currentPotluck.eventName}</h1>
						<p className="address">
							{this.props.currentPotluck.locationAddress}{" "}
							{this.props.currentPotluck.locationStreet}
							{" Apt:"}
							{this.props.currentPotluck.locationUnit}
						</p>
						<p className="address">
							{this.props.currentPotluck.locationCity}{" "}
							{this.props.currentPotluck.locationState}
							{", "}
							{this.props.currentPotluck.locationPostcode}{" "}
							{this.props.currentPotluck.locationCountry}
						</p>
					</div>
					<button className='delete-potluck'
						className={`${this.state.admin}delete-potluck`}
						onClick={this.onDeletePotluck}
					>
						Delete Potluck
					</button>
					<button
						className={`${this.state.attendee} deleted-potluic`}
						onClick={this.onRemoveSelf}
					>
						Unattended Potluck
					</button>
				</div>
			</div >
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.potluckState.currentPotluck,
	currentUser: state.userState.currentUser,
});

const PotluckInfoWithRouter = withRouter(PotluckInfo);

export default connect(mapStateToProps, {
	deletePotluck,
	getPotlucks,
	removeAttendee,
})(PotluckInfoWithRouter);
