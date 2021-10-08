import HeadStyleDiv from "./styled";
import axios from 'axios';

const Head = () => {


    return (
        <HeadStyleDiv>
            <div className={"head-content"}>
                <div className={"head-content-title"}>云中君</div>
                <div className={"head-content-notes"}>反者道之动,弱者道之用</div>
                <div onClick={() => {
                    axios.get("http://wthrcdn.etouch.cn/weather_mini", {
                        params: {city: "珠海"},
                    }).then((res: any) => {
                            console.log(res)
                        }
                    )

                }}>test
                </div>
            </div>
        </HeadStyleDiv>
    );
};
export default Head;
