import React from 'react';
import styled from 'styled-components';

const Subject = styled.div`
    font-family: "sf pro display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #8ED1DC;
    display:inline;
  `;

const Pointer = styled.div`
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display:inline;
  `;
const IconNext = styled.svg`
    fill: white;
    width: 14px;
  `;

const Subjects = (props) => {
  if (props.subjects) {
    return (
    <div>
      <Subject>{props.subjects[0]}</Subject>
      <Pointer>
        <IconNext viewBox="0 -5 24 24">
          <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z"></path>
        </IconNext>
      </Pointer>
      <Subject>{props.subjects[1]}</Subject>
      <Pointer>
        <IconNext viewBox="0 -5 24 24">
          <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z"></path>
        </IconNext>
      </Pointer>
      <Subject>{props.subjects[2]}</Subject>
    </div>
  )}
  else { return null };
};

export default Subjects;