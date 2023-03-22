import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #d6e2f0;

  .qrCode {
    width: 310px;
    height: 470px;
    padding: 15px;
    margin: 0 10px;
    background: #fff;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    h1 {
      margin-top: 15px;
      font-size: 20px;
      font-weight: 700;
      padding: 0 15px;
      color: #1f3251;
    }

    p {
      margin-top: 15px;
      padding: 0 15px;
      font-size: 15px;
      font-weight: 400;
      color: #7b879d;
    }
  }
`;
