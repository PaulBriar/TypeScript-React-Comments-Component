import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

class App extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
	}

	public render() {
		return (
			<div className="ui container comments">
					<CommentDetail author="Sam" timeAgo="Today at 4:30pm" text="Awesome!" img={faker.image.avatar()}/>
					<CommentDetail author="Tom" timeAgo="Today a 2:30pm" text="Cool!" img={faker.image.avatar()}/>
					<CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" text="Nice!" img={faker.image.avatar()}/>
			</div>
			);
	}

};



ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);