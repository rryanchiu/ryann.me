import {useTheme} from "../hooks/useTheme.tsx";
import party from "party-js";
import {useEffect, useState} from "react";

const Header = () => {

    const [theme, setTheme] = useTheme()

    const switchTheme = (e: React.MouseEvent) => {
        const x = `${e.clientX}px`;
        const y = `${e.clientY}px`;
        document.documentElement.style.setProperty("--click-x", x);
        document.documentElement.style.setProperty("--click-y", y);

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                setTheme(theme === "dark" ? "light" : "dark");
            });
        } else {
            setTheme(theme === "dark" ? "light" : "dark");
        }
    };
    const [likes, setLikes] = useState<number>(0)

    const handleLike = (e: React.MouseEvent) => {
        party.confetti(e.currentTarget as HTMLElement, {
            count: party.variation.range(20, 40),
            size: 0.6
        });
        setLikes(likes + 1)
        doLike()

    };
    const formatNumberWithCommas = (num: number) => {
        if (num <= 0) {
            return "";
        } else {
            return num.toLocaleString();
        }
    }

    const getLikes = async () => {
        const getLikeCountUrl = "https://api.testpaper.fun/api/domain/getLikeCount?domain=ryann_me"
        try {
            const response = await fetch(getLikeCountUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch like count: ${response.statusText}`);
            }

            const data = await response.json();
            return data.data; // Assuming the API returns { "likeCount": number }
        } catch (error) {
            console.error('Error fetching like count:', error);
            return 0; // Fallback to 0 in case of error
        }
    }

    const doLike = () => {
        const getLikeCountUrl = "https://api.testpaper.fun/api/domain/like?domain=ryann_me"
        try {
            fetch(getLikeCountUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        } catch (error) {
            console.error('Error fetching like count:', error);
            return 0; // Fallback to 0 in case of error
        }
    }


    const init = async () => {
        const likeCount = await getLikes();
        setLikes(likeCount)
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <div className="h-10 justify-end flex gap-1 mb-2">
            {/*<button style={{border: "none"}}*/}
            {/*        className={` bg-transparent hover:bg-dark-2 hover:color-gray-1 inline-flex p-3 rounded-md transition-colors decoration-none`}>*/}
            {/*    <i className="ri-translate"></i>*/}
            {/*</button>*/}

            <button onClick={handleLike}
                    className={`border-none hover:border-none bg-transparent  hover:color-red-400 inline-flex p-3 rounded-md transition-colors decoration-none`}>
                <div className='flex gap-1 justify-center'>
                    <i className="ri-heart-fill"></i>
                    <span className='text-xs'>{formatNumberWithCommas(likes)}</span>
                </div>
            </button>
            {theme === 'dark' && (
                <button onClick={(e) => switchTheme(e)}
                        className={`border-none bg-transparent color-dark dark:color-light  hover:bg-dark-2 hover:color-gray-1 inline-flex p-3   rounded-md transition-colors decoration-none`}>
                    <i className="ri-sun-line"></i>
                </button>
            )}
            {theme === 'light' && (
                <button onClick={(e) => switchTheme(e)}
                        className={`border-none bg-transparent  hover:bg-dark-2 hover:color-gray-1 inline-flex p-3   rounded-md transition-colors `}>
                    <i className="ri-moon-line"></i>
                </button>
            )}

        </div>
    )
}
export default Header