import React from 'react';

function MessageCard(props) {
	return (
		<div className="message-card">
			<img src={props.message.imgUrl} alt=""/>
			<h3>{props.message.title}</h3>
			<p>{props.message.desc}</p>
			<p>By: {props.message.author}</p>
		</div>
		)
}

export default MessageCard;
