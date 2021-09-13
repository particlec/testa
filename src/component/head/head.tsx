import HeadStyleDiv from "./styled";

const Head = () => {
  return (
    <HeadStyleDiv>
      <div className={"head-content"}>
        <div className={"head-content-title"}>标题</div>
        <div className={"head-content-notes"}>注释</div>
      </div>
    </HeadStyleDiv>
  );
};
export default Head;
