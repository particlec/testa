import { Input, Space } from 'antd';

const ContentRight = () => {
    return(
        <>
            <div className={"content-right-navigation"} >
                <Input.Search placeholder="input search text"  style={{ width: 200 }} />
            </div>

        </>
    )
}
export default ContentRight;