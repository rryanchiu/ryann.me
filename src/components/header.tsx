import {useTheme} from "../hooks/useTheme.tsx";

const Header = () => {

    const [theme, setTheme] = useTheme()

    const switchTheme = (e: React.MouseEvent) => {
        const x = `${e.clientX}px`;
        const y = `${e.clientY}px`;
        document.documentElement.style.setProperty("--click-x", x);
        document.documentElement.style.setProperty("--click-y", y);

        // 动画 + 切换
        document.startViewTransition(() => {
            setTheme(theme === "dark" ? "light" : "dark");
        });
    };
    return (
        <div className="h-10 justify-end flex gap-1 mb-2">
            {/*<button style={{border: "none"}}*/}
            {/*        className={` bg-transparent hover:bg-dark-2 hover:color-gray-1 inline-flex p-3 rounded-md transition-colors decoration-none`}>*/}
            {/*    <i className="ri-translate"></i>*/}
            {/*</button>*/}
            {theme === 'dark' && (
                <button style={{border: "none"}}
                        onClick={(e) => switchTheme(e)}
                        className={` bg-transparent color-dark dark:color-light  hover:bg-dark-2 hover:color-gray-1 inline-flex p-3   rounded-md transition-colors decoration-none`}>
                    <i className="ri-sun-line"></i>
                </button>
            )}
            {theme === 'light' && (
                <button style={{border: "none"}}
                        onClick={(e) => switchTheme(e)}
                        className={` bg-transparent  hover:bg-dark-2 hover:color-gray-1 inline-flex p-3   rounded-md transition-colors `}>
                    <i className="ri-moon-line"></i>
                </button>
            )}

        </div>
    )
}
export default Header