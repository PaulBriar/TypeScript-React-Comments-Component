import * as React from 'react';

export default class CommentDetail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        //this.state = {author: this.props.author};
    }

    public render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={this.props.img} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">{this.props.author}</a>
                    <div className="metadata">
                        <span className="date">{this.props.timeAgo}</span>
                    </div>
                    <div className="text">{this.props.text}</div>
                </div>
            </div>
        );
    }
};
