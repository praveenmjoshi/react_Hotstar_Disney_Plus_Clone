import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [sideNavStatus, setSideNavStatus] = useState(false);
    return (
        <div>
            <Nav> 
                <CustomMenu onClick={()=> setSideNavStatus(true)} />

                <SideNav show={sideNavStatus}>
                    <CloseWrapper>
                        <CustomCloseIcon onClick={() => setSideNavStatus(false)} />
                    </CloseWrapper>
                    <li><a href="#"> Channels </a></li>
                    <li><a href="#"> Languages </a></li>
                    <li><a href="#"> Genres</a></li>
                </SideNav>
                
                <Logo src="/images/disney-hotstar-logo-dark.svg" />

                <NavMenu>
                    <a>
                        <span>TV</span>
                    </a>

                    <a>
                        <span>Movies</span>
                    </a>

                    <a>
                        <span>Sports</span>
                    </a>

                    <a>
                        <span>Disney+</span>
                    </a>

                    <a>
                        <img src="/images/kids.svg"></img>      
                    </a>

                </NavMenu>
                <UserImg src="/images/user.png"></UserImg>
            </Nav>
        </div>
    )
}

export default Header


const Nav = styled.div`
    height: 80px;
    background: #131a28;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 46px;
    overflow-x: hidden;
`

const Logo = styled.img`
    margin-top:-8px
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 10px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
        }

        span{
            padding: 0 2px;
            font-size: 17px;
            font-weight: 400;
            // letter-spacing: 1px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
`

const SideNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgb(25, 33, 51);
    width: 500px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)' };
    transition: transform 0.3s; 
    z-index: 10;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 500;
            color: white;
        }
    }
`

const CustomCloseIcon = styled(CloseIcon)`
    cursor: pointer;
    padding: 10px;
    box-sizing: content-box
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
