import styled from "styled-components";

const HeadStyleDiv = styled.div`
  //margin: 0 50px;
  height: 109px;
  position: absolute;
  top: 58px;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .head-content {
    width: 1150px;
    .head-content-title {
      color: #444444;
      font-size: 37px;
      font-weight: bold;
    }
    .head-content-notes {
      font-size: 15px;
      color: #999;
    }
  }
`;
export default HeadStyleDiv;
