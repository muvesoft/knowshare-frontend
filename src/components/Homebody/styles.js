import styled from 'styled-components';

export const Homebody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100px;
  margin-top: 2rem;
`;

export const HomebodyTitle = styled.div`
  color: #1f1f1f;
  text-align: center;
  margin-bottom: 6rem;
  h1 {
    font-weight: 600;
    font-size: 32px;
  }
  h4 {
    font-size: 18.5px;
    font-weight: 500;
  }
  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 28px !important;
    }
    h4 {
      font-size: 16px !important;
    }
  }
`;
