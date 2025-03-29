import React, { useContext } from 'react'
import { DashboardContext } from '../../utils/dashboard-context'
import Wrapper from '../../assets/wrappers/ThemeToggle'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useContext(DashboardContext);

    return (
        <Wrapper onClick={toggleDarkTheme}>
            {
                isDarkTheme ? <BsFillSunFill className='toggle-icon' /> : <BsFillMoonFill />
            }
        </Wrapper>
    )
}

export default ThemeToggle