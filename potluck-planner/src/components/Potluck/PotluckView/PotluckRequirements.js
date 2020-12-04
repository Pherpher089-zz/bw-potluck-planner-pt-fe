import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Popup from "reactjs-popup";
import {
	addRequirement,
	removeRequirement,
	getRequirements,
	claimRequirement,
} from "../../../actions/RequirementsActions.js";
import "./PotluckView.scss";

class PotluckRequirements extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
			newRequirement: {
				category: "Meat",
				item: "",
				servings: "",
			},
		};
	}

	componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		}
	}

	onChangeReq = (e) => {
		e.preventDefault();
		this.setState({
			newRequirement: {
				...this.state.newRequirement,
				[e.target.name]: e.target.value,
			},
		});
	};

	removeRequirement = async (e) => {
		e.preventDefault();
		console.log(e.target.id)
		await this.props.removeRequirement(e.target.id);
	};


	onSubmitReq = async (e) => {
		e.preventDefault();
		let potluckId = this.props.currentPotluck.id;
		let newRequirement = {
			foodCategory: this.state.newRequirement.category,
			foodDescription: this.state.newRequirement.item,
			servings: this.state.newRequirement.servings,
			fufilled: false,
		};

		await this.props.addRequirement(newRequirement, potluckId);

		this.setState({
			newRequirement: {
				category: "Meat",
				item: "",
				servings: "",
				fufilled: false,
			},
		});
	};

	onClaimRequirement = async (e) => {
		e.preventDefault();
		let curReqs = this.props.currentRequirements;
		let selectedReq;

		for (var i = 0; i < curReqs.length; i++) {
			if (curReqs[i].id === parseInt(e.target.id)) {
				selectedReq = i;
				break;
			}
		}

		let food = {
			reqId: curReqs[selectedReq].id,
			potluckId: this.props.currentPotluck.id,
			foodCategory: curReqs[selectedReq].foodCategory,
			foodDescription: curReqs[selectedReq].foodDescription,
			servings: curReqs[selectedReq].servings,
		};

		await this.props.claimRequirement(food);
		await this.props.getRequirements(this.props.currentPotluck.id);


	};

	render() {
		return (
			<div className="requirement-container">
				<h2 className="foodRequirements">
					Food Requirements{" "}
					<div className={this.state.admin}>
						<Popup
							className="popup"
							trigger={<div className="addIcon">+</div>}
							arrow="false"
							modal="true"
							position="center"
							lockScroll="true"
						>
							<form className="add-req-form">
								<h2>Add new requirement</h2>
								<div>Category</div>
								<select
									name="category"
									onChange={this.onChangeReq}
									required
								>
									<option value="Meat">Meat</option>
									<option value="Poultry">Poultry</option>
									<option value="Sea Food">Sea Food</option>
									<option value="Beverage">Beverage</option>
									<option value="Desert">Desert</option>
									<option value="Side/Condiment">
										Side/Condiment
									</option>
									<option value="Vegetable">Vegetable</option>
									<option value="Dairy">Dairy</option>
									<option value="Fruit">Fruit</option>
								</select>
								<div>Name of dish</div>
								<input
									type="text"
									name="item"
									value={this.state.newRequirement.item}
									onChange={this.onChangeReq}
								/>
								<div>Expected servings</div>
								<input
									type="number"
									name="servings"
									value={this.state.newRequirement.servings}
									onChange={this.onChangeReq}
								/>
								<button onClick={this.onSubmitReq}>
									Add Requirement
								</button>
							</form>
						</Popup>
					</div>
				</h2>
				<div className="requirements">
					{console.log(this.props.currentRequirements)}
					{
						this.props.currentRequirements.map((req, index) => {
							var users = this.props.currentPotluckUsers;
							var user;
							var claim = "non-claimed";
							for (var i = 0; i < users.length; i++) {
								if (users[i].userId === req.fufilled) {
									claim = "claimed";
									user =
										users[i].firstName +
										" " +
										users[i].lastName;

									break;
								} else {
									user = (
										<form className={claim}>
											<button
												id={req.id}
												onClick={this.onClaimRequirement}
											>
												Claim
										</button>
										</form>
									);
								}
							}
							return (
								<div className="requirement">
									<div>{req.foodCategory}</div>
									<div>
										{req.foodDescription}
										{": "}
									</div>
									<div>
										{"Servings: "}

										{req.servings}
									</div>
									<div>{user}</div>
									<img
										className={this.state.admin}
										src={require("./imgs/x-icon.png")}
										alt="x"
										id={req.id}
										index={index}
										onClick={this.removeRequirement}
									/>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.potluckState.currentPotluck,
	currentRequirements: state.requirementState.currentRequirements,
	currentPotluckUsers: state.userState.currentPotluckUsers,
});

const PotluckRequirementsWithRouter = withRouter(PotluckRequirements);

export default connect(mapStateToProps, {
	addRequirement,
	removeRequirement,
	getRequirements,
	claimRequirement,
})(PotluckRequirementsWithRouter);
