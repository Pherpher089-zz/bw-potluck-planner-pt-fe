import React from "react";

const PrivateRoute = Component => ProtectedComponent => {
	return class extends React.Component {
		render() {
			if (localStorage.getItem("token")) {
				return <ProtectedComponent {...this.props} />;
			} else {
				return <Component />;
			}
		}
	};
};

export default PrivateRoute;
