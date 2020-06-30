import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

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
                <div>
                    <Card>
                        <CardBody>
                            <h4>Comments</h4>
                            {
                                comments.map((comment) => {
                                    return (
                                        <div>
                                            <div>{comment.comment}</div>
                                            <br />
                                            <div>-- {comment.author}, {dateFormat(comment.date, "mmmm dS, yyyy")}                                            
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
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.props.selectedDish != null ? this.renderComments(this.props.selectedDish.comments) : <div></div>}
                </div>
            </div>
        );
    }
}

export default DishDetail;