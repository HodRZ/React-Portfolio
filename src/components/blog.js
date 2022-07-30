import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import blog from "../blog.json"
import { Button, Card } from "react-bootstrap";
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
                <LinkContainer to={{ pathname: "https://google.com" }} target="_blank">
                    <Card text="light" bg="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button href={item.url} variant="light">Read more</Button>{' '}
                        </Card.Body>
                    </Card>
                </LinkContainer>

            )
        } return items
    }

    render() {
        return (
            < div >
                <h2>a journal to document the journey of learning web-dev</h2>
                <div>
                    {
                        this.renderedList()

                    }
                </div>
            </div >
        );
    }
}

export default Blog;

// <LinkContainer to="/">
//               <Nav.Link href="/">Home</Nav.Link>
//             </LinkContainer>