import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

class App extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
	}

	public render() {
		return (
			<div className="ui container comments">
					<ApprovalCard>
						<CommentDetail author="Sam" timeAgo="Today at 4:30pm" text="Awesome!" img={faker.image.avatar()}/>
					</ApprovalCard>
					<ApprovalCard>
						<CommentDetail author="Tom" timeAgo="Today a 2:30pm" text="Cool!" img={faker.image.avatar()}/>
					</ApprovalCard>
					<ApprovalCard>
						<CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" text="Nice!" img={faker.image.avatar()}/>
					</ApprovalCard>
			</div>
			);
	}
};



ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);