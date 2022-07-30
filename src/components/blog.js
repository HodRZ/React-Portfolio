import React, { Component } from 'react';
// import { LinkContainer } from "react-router-bootstrap";
import blog from "../blog.json"
import { Button, Card, Row } from "react-bootstrap";
// import { Route } from 'react-router-dom';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData: blog
        }
    }

    renderedList = () => {
        const items = []
        for (let item of this.state.blogData) {
            items.push(
                <Card text="light" bg="dark" style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="light">Read more</Button>{' '}
                    </Card.Body>
                </Card>


            )
        } return items
    }

    render() {
        return (
            < div className="blogCards" >
                <h2 className='cardsHeading'>a journal to document the journey of learning web-dev</h2>
                <Row className="g-4">
                    {
                        this.renderedList()

                    }
                </Row>
            </div>

        );
    }
}

export default Blog;
