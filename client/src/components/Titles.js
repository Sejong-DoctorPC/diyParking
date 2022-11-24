import React from "react";

class Titles extends React.Component {
	
	render () {
		/*
		const getApi = async () => {
			axios.get("/api").then((res) => console.log(res.data));
		};

		useEffect(()=>{
			getApi();
		}, []);
		*/
		return (
			<div>
				<h1 className="title-container__title">USPACE</h1>
				<h3 className="title-container__subtitle">Make your own space, USPACE</h3>
			</div>
		);
	}
}

export default Titles;
