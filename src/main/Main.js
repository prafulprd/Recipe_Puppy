import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, CardColumns, Card } from 'react-bootstrap';
import axios from 'axios';
import img from '../images/img.jpg';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    				search: '',
    				data: [],
    				loader: true,
    				btntext: "Search",
    			};

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  search = () => {

    this.setState({loader: true, btntext: 'Searching...'});

		 axios({
		  method: 'get',
		  headers: {
            'Access-Control-Allow-Origin': '*'
          },
		  url: 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q='+this.state.search
		})
		  .then((response) => {
		    console.log(response.data);

		    if (response.data.results.length > 0) {

				this.setState({data: response.data.results});

		    }else{

				this.setState({data: [] });
			}

			this.setState({loader: false, btntext: 'Search'});

			console.log(this.state);

		  });
  }

  render() {
    return (
      <Container className="recipe-section">
      	<Row>
		    <Col xs={12} lg={{span:4, offset:8}} md={4}>
		    	<h5 className="text-center">
				  Enter Any Keyword To Search Recipe
				</h5>
		        <Form inline>
			      <Form.Control
				    className="mb-2 mr-sm-2"
				    id="search"
				    placeholder="Search Recipe"
				    onChange={ this.handleChange }
				  />
			      <Button id="search_recipe" onClick = {(e) => this.search(e)} type="button" className="mb-2">
				    {this.state.btntext}
				  </Button>
				</Form>
		    </Col>
		</Row>
		{
		this.state.loader === true && this.state.data.length === 0 &&
		<Row>
			<Col>
				<h4 className="text-center">
				  Please Search Recipe
				</h4>
			</Col>
		</Row>
    	}

    	{
		this.state.loader === false && this.state.data.length === 0 &&
		<Row>
			<Col>
				<h4 className="text-center">
				  There is no Recipe for your search. Please try again.
				</h4>
			</Col>
		</Row>
    	}

    	{

    	this.state.loader === false && this.state.data.length > 0 &&

    	<Row>
    		<h3 className="text-center">Here is the list of recipe that you searching for</h3>
    		{ 
    			this.state.data.map(function(item, i){
    			return <Col xs={12} md={4} lg={4}>
    			<Card border="primary" className="recipe-card" key={i}>
	    			<Card.Header>Recipe Puppy </Card.Header>
					    <Card.Img variant="top" src={img} />
					    <Card.Body>
					      <Card.Title>{item.title}</Card.Title>
					      <Card.Text>
					        Ingredients: {item.ingredients}
					      </Card.Text>
					      <a href={item.href}>
					      	<Button variant="primary">More Info</Button>
					      </a>
					    </Card.Body>
				  </Card>
				 </Col>
				})
			}
		</Row>

		}
	  </Container>
		);
  }
}

export default Main;