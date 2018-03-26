import styled from 'styled-components';
import color from '../../utils/color-style';
import {titlePage} from "../../utils/mixin-style";
import contact from '../../images/bg-contact.jpg';

export default styled.div`
  & .bg-black {
      background-color: #141519;
      width: 100%;
      height: 100%;
  }
  & .footer {
    background: url(${contact}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    &-title {
      ${titlePage};
      color: ${color.yellow};
      width: 60%;
      margin: 0 auto;
      font-size: 2rem;
      padding-top: 12rem;
      line-height: 3rem;
      &::after {
        width: 45%;
        margin-top: 12rem;
      }
    }
    &-map {
      display: flex;
      padding: 0 12%;
    }
    &-contact {
      color: #ffffff;
      flex-basis: 40%;
      display: flex;
      flex-direction: column;
      padding: 0 4rem;
      margin-bottom: 3rem;
    }
  }
  & .contact {
    &-desc {
      display: flex;
      justify-content: space-around;
    }
    &-icon {
      flex-basis: 10%;
      align-self: center;
      font-size: 1.4rem;
    }
    &-info {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.8rem;
      flex-basis: 85%;
    }
  }
  & .copyright {
    text-align: center;
    font-size: 1.2rem;
    color: ${color.white};
    font-weight: 400;
    margin-top: 2rem;
    line-height: 5rem;
  }
`;
