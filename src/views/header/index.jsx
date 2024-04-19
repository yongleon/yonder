/*yonder_header
首页
Leon
2024/01/04
*/

import React from 'react';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderCenter from './HeaderCenter/HeaderCenter';
import './index.less';




const Header = function Header () {
    return <div className='header'>
        <div className='header_flex'>
            <HeaderLeft />
        </div>
        <div className='header_flex header_flex_center'>
            <HeaderCenter />
        </div>
        <div className='header_flex header_flex_right'>3</div>
    </div>
}

export default Header




