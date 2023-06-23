import './Footer.css';
import {AiFillPhone} from 'react-icons/ai';
import {RiKakaoTalkFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';


export default function Footer(){
    return(
        <footer>
            <div id='footerBtn'>
                <p>
                    <button type='button'><AiFillPhone />&nbsp;고객센터</button>
                </p>
                <p>
                    <button type='button'><RiKakaoTalkFill />&nbsp;카카오톡</button>
                </p>
            </div>
            <div id='footer'>
                <ul>
                    <li>㈜한샘 대표자 : 김진태 | 경기도 안산시 성곡동 665</li>
                    <li>사업자등록번호 : 133-81-22865</li>
                    <li>통신판매업신고 : 2010-경기안산-0512</li>
                    <li>개인정보 관리 보호 책임자 : 신희송</li>
                    <li>한샘몰 고객센터 : 1688-4945</li>
                </ul>
                <p>
                    한샘몰 내 판매 상품 중 '입점브랜드상품'으로 명기된 상품의 경우,<br/>
                    (주)한샘은 판매자가 아닌 통신판매중개자이므로 판매자로서의 책임을<br/>
                    부담하지 아니합니다. 해당 상품, 거래정보 및 거래에 대하여는<br/>
                    실제 판매자인 각 입점업체에게 책임이 있습니다.
                </p>
                <ul>
                    <li>
                        <ul>
                            <li><Link to="/">이용약관</Link></li>
                            <li><Link to="/">위치정보이용약관</Link></li>
                            <li><Link to="/">이메일무단수집거부</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link to="/">개인정보처리방침</Link></li>
                            <li><Link to="/">KEB하나은행 채무지급보증 안내</Link></li>
                        </ul>
                    </li>
                </ul>
                <small>&copy; 2023 Hanssem Co., Ltd. All rights reserved.</small>
            </div>  
        </footer>
    );
}