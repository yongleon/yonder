
import { Form, Input } from 'antd';
const { Search } = Input;


const SearchBox = function SearchBox () {
    return <div className='search_input'>
        <Form>
            <Form.Item
                name="name"
            >
                <Search
                    placeholder={'123'}
                    allowClear
                    size="large"
                    activeBorderColor='#00000'
                />
            </Form.Item>
        </Form>
    </div>


}

export default SearchBox