import styled from "styled-components";

const DivStyledPageContent = styled.div`
  width: 100%;
  height: 100%;
  //display: flex;
  div.content-left{
    width: 70%;
    float: left;
  }
  
  div.content-right{
    height: 700px;
    border-left: 1px solid #e5e5e5;
    float: right;
    width: 281px;
    position:relative;
    //height: auto;
    
    div.content-right-navigation{
      left:20px;
      width:100%;
      height:100%;
      position:absolute;
      top:40px
    }
  }
  
`;

export default DivStyledPageContent;