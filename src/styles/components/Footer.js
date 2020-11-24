import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  text-align: start;
  width: 100%;

  footer {
    width: 100%;
    max-width: 1220px;
    padding: 3rem;

    @media (max-width: 866px) {
      font-size: 12px;
      text-align: center;
    }
  }
`;


export const SocialMobile = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: none;

  svg:hover {
    transform: translateY(-3px);
    color: #3bd783;
  }

  @media (max-width: 886px) {
    display: inline-block;
    text-align: center;
    width: 100%;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 30px;
      max-width: 500px;
      margin: 1rem;
    }
  }
`;