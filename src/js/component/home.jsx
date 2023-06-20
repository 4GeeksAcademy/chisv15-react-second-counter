import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondCounter from "./secondCounter.jsx";
//create your first component

const Home = (props) => {
	console.log(props);
	return (
		<div className="container text-center bg-dark text-white">
			<div className="row">
				<div className="col">
					<SecondCounter seconds={props.seconds} />
				</div>
			</div>
		</div>
	);
};

export default Home;
