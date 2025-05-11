// import {useEffect, useState} from "react";

const Header = () => {
    //
    // const [isDark, setIsDark] = useState(
    //     () => document.documentElement.classList.contains('dark')
    // )
    //
    // useEffect(() => {
    //     if (isDark) {
    //         document.documentElement.classList.add('dark')
    //         localStorage.setItem('theme', 'dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //         localStorage.setItem('theme', 'light')
    //     }
    // }, [isDark])
    //

    return (
        <div className="h-10 justify-end flex gap-1 mb-2">
            {/*<button style={{border: "none"}}*/}
            {/*        className={` bg-transparent hover:bg-dark-2 hover:color-gray-1 inline-flex p-3 rounded-md transition-colors decoration-none`}>*/}
            {/*    <i className="ri-translate"></i>*/}
            {/*</button>*/}
            {/*<button style={{border: "none"}}*/}
            {/*        onClick={() => setIsDark(!isDark)}*/}
            {/*        className={` bg-transparent  hover:bg-dark-2 hover:color-gray-1 inline-flex p-3   rounded-md transition-colors decoration-none`}>*/}
            {/*    <i className="ri-sun-line"></i>*/}
            {/*</button>*/}
        </div>
    )
}
export default Header