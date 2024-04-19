/*yonder_header_left
Leon
2024/01/04
*/

import React from 'react';
import SearchBox from './SearchBox'
import Dropdown from './Dropdown'





const HeaderCenter = function HeaderCenter () {


    return <div className='header_flex_center'>
        <div className='header_search_container'>
            <SearchBox />
            {/* <Dropdown /> */}
        </div>
    </div>
}

export default HeaderCenter




