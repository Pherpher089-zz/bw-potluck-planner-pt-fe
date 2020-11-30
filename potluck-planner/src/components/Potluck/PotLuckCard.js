import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getPotlucks, getPotluckById } from "../../actions/PotluckActions.js";
import "./Potluck.scss";

class PotluckCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onSelect = (e) => {
		let selectId = e.currentTarget.id;
		this.props.history.push(`/protected/view-potluck/${selectId}`);
	};
	onComponentUpdate() {
		console.log('props V')
		console.log(this.props)
	}
	render() {
		console.log('props V')
		console.log(this.props)
		if (this.props.potlucks === undefined) {
			return <div>You don't have any potlucks currently</div>;
		}
		return (
			<div className="card-container">
				{this.props.potlucks.map((potluck) => {
					return (
						<div
							className="card"
							id={potluck.potluckId}
							onClick={this.onSelect}
						>
							<h1>{potluck.locationName}</h1>
							<address>
								<p>
									{potluck.locationCity},{" "}
									{potluck.locationState}
								</p>
							</address>
						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	potlucks: state.potluckState.potlucks,
});

const PotluckCardWithRouter = withRouter(PotluckCard);

export default connect(mapStateToProps, { getPotlucks, getPotluckById })(
	PotluckCardWithRouter
);
