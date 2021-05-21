import axios from 'axios';
import faker from 'faker';
import Rating from './components/Rating.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Subjects from './components/Subjects.jsx';

const BodyWrapper = styled.div`
  background-color: black;
  `;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  letter-spacing: 0.5px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:600;
  margin-top: 8px;
  margin-bottom: 8px;
  `;

const Tagline = styled.div`
  color: white;
  font-size: 19px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:300;
  margin-top:16px;
  margin-bottom:16px;
  `;

const BestBox = styled.div`
  display:inline;
  `;

const Bestseller = styled.span`
  background-color: #FFE799;
  font-size:12px;
  font-family:"sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 4px 8px;
  border-radius:7%;
  display:inline;
  `;

const RatingWrapper = styled.div`
  margin-top: 8px;
  display: inline;
  color: #FFC48C;
  `;

const AuthorWrapper = styled.div`
  color: white;
  font-size: 14px;
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight:250;
  margin-top:16px;
  margin-bottom:16px;
  `;

const AuthorName = styled.span`
  color: #8ED1DC;
  text-decoration: underline;
  display:inline;
  `;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: {},
      review: {
        average: 3.7,
        total: 16384
      } // hard-coded until API is running
    };
  };

  capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  componentDidMount() {
    const regex = /\d+/;
    let course = window.location.search.match(regex) === null ? 5 : window.location.search.match(regex)[0];
    console.log(course);
    this.getOverview(course);
  }

  getOverview(id = 5) {
    axios.get(`http://localhost:3000/overview/?courseId=${id}`)
    .then((res) => {
      let overview = res.data;
      let review = this.state.review;
      this.setState({
        overview: overview
      });
      //will need further API calls here /-- these should be calls to external components
    })
    .catch((err) => console.log(err));
  }
  //all data below will be re-factored to draw from state

  render () {
    return (
      <BodyWrapper>
        <div><Subjects subjects={this.state.overview.subjects} /></div>
        <Title>{this.state.overview.title}</Title>
        <Tagline>{this.state.overview.tagline}</Tagline>
        <BestBox><Bestseller>Bestseller</Bestseller></BestBox>
        <RatingWrapper><Rating average={this.state.review.average} total={this.state.review.total} students={this.state.overview.students} /></RatingWrapper>
        <AuthorWrapper>Created by <AuthorName>Constanza Nomina</AuthorName></AuthorWrapper>
        {/*<div><Updated /></div>*/}
        {/*<div><Wishlist /></div>*/}
        {/*<div><Share /></div>*/}
      </BodyWrapper>
    )
  };
}

ReactDOM.render(<Overview />, document.getElementById('overview'));

export default Overview;
