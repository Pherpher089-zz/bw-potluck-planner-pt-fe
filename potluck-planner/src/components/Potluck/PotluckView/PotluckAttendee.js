import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Popup from "reactjs-popup";
import {
	addAttendee,
	getUsersByPotluckId,
	removeAttendee,
} from "../../../actions/index";
import "./PotluckView.scss";
class PotluckAttendee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
			newAttendee: "",
		};
	}

	async componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		}
	}
	onChangeAttendee = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	removeAttendee =  (e) => {
		let attendee = {
			potluckId: this.props.currentPotluck.id,
			userId: e.target.id,
		};
		
		 this.props.removeAttendee(attendee);
	};
	onSubmitAttendee = async (e) => {
		e.preventDefault();
		let newAttendee = {
			potluckId: this.props.currentPotluck.id,
			role: 1,
			email: this.state.newAttendee,
		};
		await this.props.addAttendee(newAttendee);
		this.setState({ ...this.state, newAttendee: ""});
	};

	render() {
		return (
			<div className="attendees-container">
				<h2>Attendees</h2>
				<div className="attendee-container">
					{this.props.currentPotluckUsers.map((user) => {
						let userInitial =
							user.firstName.substring(0, 1) +
							user.lastName.substring(0, 1);
						console.log(`Fist Initial: ${userInitial}`);
						return (
							<Popup
								position="top"
								className="attendee-info"
								arrow="false"
								ho
								trigger={
									<div className="attendee">
										<span className="initials">
											{userInitial}
											{user.role}
										</span>
									</div>
								}
							>
								<div className="popup">
									<div>
										{user.firstName} {user.lastName}
									</div>
									<button
										id={user.userId}
										onClick={this.removeAttendee}
										className={this.state.admin}
									>
										Remove
									</button>
								</div>
							</Popup>
						);
					})}
					<Popup
						modal="true"
						trigger={
							<div className="attendee add">
								<span className="initials">+</span>
							</div>
						}
					>
						<form className={this.state.admin + " add-attendee"}>
							<div>Add Attendee</div>
							<div className="email">Attendee Email</div>
							<input
								type="email"
								value={this.state.newAttendee}
								onChange={this.onChangeAttendee}
								name="newAttendee"
							/>
							<button onClick={this.onSubmitAttendee}>
								Add Attendee{" "}
							</button>
						</form>
					</Popup>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	currentPotluckUsers: state.reducer.currentPotluckUsers,
	currentPotluck: state.reducer.currentPotluck,
});

const PotluckAttendeeWithRouter = withRouter(PotluckAttendee);

export default connect(mapStateToProps, {
	addAttendee,
	removeAttendee,
	getUsersByPotluckId,
})(PotluckAttendeeWithRouter);
