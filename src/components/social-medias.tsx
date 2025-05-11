const SocialMedias = () => {
    const list = [
        {
            text: 'Github',
            link: 'https://github.com/rryanchiu',
            icon: 'ri-github-fill',
            class: 'hover:bg-dark-2 hover:color-gray-1'
        }, {
            text: '',
            link: 'https://www.linkedin.com/in/xiaoliangqiu/ ',
            icon: 'ri-linkedin-box-fill',
            class: 'hover:bg-dark-2 hover:color-gray-1'
        }, {
            text: '',
            link: 'mailto:xiaoliang.q@outlook.com',
            icon: 'ri-mail-line',
            class: 'hover:bg-dark-2 hover:color-gray-1'
        }
    ]
    const openLink = (link: string) => {
        window.open(link, '_blank')
    }
    return (
        <div className='pt-5'>
            {list.map((item, index) => (
                <button style={{border: "none"}} key={index}
                        onClick={() => openLink(item.link)}
                        className={`inline-flex px-3 py-2 mt-2 mr-2  rounded-md transition-colors decoration-none ${item.class}`}>
                    <i style={{fontSize: '20px'}} className={item.icon}></i>
                    {item.text}
                </button>
            ))}
        </div>
    )
}
export default SocialMedias