import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="list-unstyled">
                    <Card>
                        <CardBody>
                            <h4>Comments</h4>
                            {
                                comments.map((comment) => {
                                    return (
                                        <div>
                                            <div>{comment.comment}</div>
                                            <br />
                                            <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                            </div>
                                            <br />
                                        </div>
                                    );
                                })
                            }
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (<div></div>)
        }

    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.props.dish != null ? this.renderComments(this.props.dish.comments) : <div></div>}
                    </div>
                </div>
            </div>

        );
    }
}

export default DishDetail;