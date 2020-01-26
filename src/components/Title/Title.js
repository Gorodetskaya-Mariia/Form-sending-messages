import React from "react";
import "./Title.css";

class Title extends React.Component {
	render(){
		const { titleClass, titleText} = this.props;
		
		return (
		<h2 className={titleClass}>{titleText}</h2>
		)
	}
}

export default Title;