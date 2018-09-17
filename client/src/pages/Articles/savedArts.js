import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class savedArts extends Component {
  state = {
    articles: [],
    title: "",
    link: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadArts();
  }

  loadArts = () => {
    API.getBooks()
      .then(res =>
        this.setState({ articles: res.data, title: "", link: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
          </Col>
          </Row>
          <Row>
          <Col size="md-6 sm-12">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(articles => {
                  return (
                    <ListItem key={articles._id}>
                      {/* <a href={"/books/" + book._id}> */}
                        <strong>
                          {articles.title}
                        </strong>
                        {articles.synopsis}
                      {/* </a> */}
                      <DeleteBtn />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default savedArts;
