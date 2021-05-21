import React from 'react';
import styled from 'styled-components';

const StarIcon = styled.svg`
  width: 14px;
`;

const StarSet = styled.div`
  display:inline;
  margin-left: 4px;
  margin-right: 4px;
  vertical-align: -2px;
  `;

const RatingInternalWrapper = styled.div`
  display:inline;
  font-size:14px;
  margin-left: 4px;
  color:#FFC48C;
  font-family:"sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;

const Total = styled.div`
  color:white;
  display:inline;
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 300;
  `;

const star = (fill, num) => {
  // 0 = empty, 0.5 = half, 1 = full
  const fillings = ["black", "url(#halfstar)", "#FFC48C"];
  return (
  <StarIcon key={num} viewBox="0 0 24 24" width="12" beight="12">
    <defs>
      <linearGradient id="halfstar">
          <stop offset="50%" stopColor="#FFC48C"/>
          <stop offset="50%" stopColor="black" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" strokeWidth="1" stroke="#FFC48C" fill={fillings[Math.floor(fill * 2)]}></path>
  </StarIcon>
  );
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Rating = (props) => {
  const five = [0, 1, 2, 3, 4];
  const starArray = five.map(num => {
    if (props.average - num <= 0.2) {
      return star(0, num);
    }
    if (props.average - num >= 0.8) {
      return star(1, num);
    }
    return star(0.5, num);
  });
  return (
    <RatingInternalWrapper>
      {props.average.toFixed(1)}
      <StarSet>{starArray}</StarSet>
      <Total>{"(" + numberWithCommas(props.total) + " ratings)"}</Total>
      <Total>{props.students ? numberWithCommas(props.students) : null} students</Total>
    </RatingInternalWrapper>
  )
};

export { Rating as default };
