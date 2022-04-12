import styled from 'styled-components';

const violet = '#8373e6';

export const StyledBookingCard = styled.span`
  margin: 10px;
  width: 250px;
  height: 300px;
  border: 3px solid transparent;
  display: inline-block;
  border-radius: 10px;
  position: relative;
  text-align: center;
  box-shadow: 0 0 20px #a8a7a7;
  cursor: pointer;

  .company-image {
    margin: 10px 0px 0px 20px;
    text-align: left;
  }

  .radio-card-header {
    margin: 50px 0 20px 7px;
    
    color: ${violet};
    font-size: 30px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-align: center;
  }

  .user-image {
    width: 80px;
    height: 80px;
  }

  .job-description {
    margin-left: 7px;
    text-align: left;
  }

  .description-header {
    font-weight: bold;
    color: grey;
  }
`;
