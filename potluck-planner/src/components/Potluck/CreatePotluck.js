import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addPotluck } from "../../actions/index";

class CreatePotluck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationName: "",
			locationAddress: "",
			locationStreet: "",
			locationUnit: "",
			locationState: "",
			locationCity: "",
			locationCountry: "",
			locationPostcode: "",
		};
	}

	onChange = e => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	onCancel = _ => {
		this.props.history.push("/protected/potlucks");
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addPotluck(this.state);
	};

	render() {
		return (
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
					}}
				>
					<input
						placeholder="Event name"
						name="locationName"
						onChange={this.onChange}
						value={this.state.locationName}
					/>
					<h2>Adress</h2>
					<input
						placeholder="address number"
						name="locationAddress"
						onChange={this.onChange}
						value={this.state.locationAddress}
					/>
					<input
						placeholder="street"
						name="locationStreet"
						onChange={this.onChange}
						value={this.state.locationStreet}
					/>
					<input
						placeholder="unit"
						name="locationUnit"
						onChange={this.onChange}
						value={this.state.locationUnit}
					/>
					<input
						placeholder="city"
						name="locationCity"
						onChange={this.onChange}
						value={this.state.locationCity}
					/>
					<input
						placeholder="zip code"
						name="locationPostcode"
						onChange={this.onChange}
						value={this.state.locationPostcode}
					/>
					<input
						placeholder="state"
						name="locationState"
						onChange={this.onChange}
						value={this.state.locationState}
					/>
					<input
						placeholder="country"
						name="locationCountry"
						onChange={this.onChange}
						value={this.state.locationCountry}
					/>
					<div>
						<button
							onClick={e => {
								e.preventDefault();
								return this.props.addPotluck(this.state);
							}}
						>
							Submit
						</button>
						<button onClick={this.onCancel}>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}
const CreatePotluckWithRouter = withRouter(CreatePotluck);
export default connect(null, { addPotluck })(CreatePotluckWithRouter);
