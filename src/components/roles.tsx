const Roles = () => {

    const current = {
        name: 'Freelance',
        role: 'Independent Developer',
        icon: '',
        location: '',
        startYear: '2024',
        endYear: 'Present',
        website: ""
    };

    const roles = [
        {
            name: 'ly.com',
            role: 'Mid-level Backend Engineer',
            icon: '/icons/ly.ico',
            location: 'Chengdu, Sichuan Province, China',
            startYear: '2021',
            endYear: '2024',
            website: "https://www.ly.com/"
        }, {
            name: 'Dmall',
            role: 'R&D Engineer',
            icon: '/icons/dmall.png',
            location: 'Chengdu, Sichuan Province, China',
            startYear: '2020',
            endYear: '2021',
            website: "https://www.dmall.com/?language=zh"
        }, {
            name: 'Zhihuiliu Education',
            role: 'Java Developer',
            icon: '/icons/zhihuiliu.ico',
            location: 'Chengdu, Sichuan Province, China',
            startYear: '2019',
            endYear: '2019',
            website: "https://www.zhihuiliu.com/"
        }, {
            name: 'Sisyphe Bookstore',
            role: 'Java Developer',
            icon: '/icons/sisyphe.ico',
            location: 'Chongqing, China',
            startYear: '2016',
            endYear: '2019',
            website: "https://www.sisyphe.com.cn/"
        },
    ]

    return (
        <div className='pt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-1">
                <div className="flex px-3 py-2 justify-between">
                    <span className="op-60 transition-opacity ">CURRENTLY</span>
                </div>
                <div className={'justify-between rd-2 px-3 py-2 flex'}>
                    <div className="w-1/2 space-y-0.5">
                        <span className="block text-xs font-bold">{current.role}</span>
                        <span className="block text-[10px] text-gray-500">{current.startYear} - {current.endYear}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="flex flex-col items-end">
                                <span className="text-xs cursor-pointer" onClick={() => {
                                    window.open(current.website)
                                }}>{current.name}</span>
                            <span className="text-[10px] text-gray-500">{current.location}</span>
                        </div>
                        {current.icon ? (<img src={current.icon} alt="GetYourGuide" className="w-3.5 h-3.5 mt-1"/>)
                            :(<div className='w-3.5 h-3.5 mt-1'> </div>)}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 mt-3">
                <div className="flex px-3 py-2 justify-between">
                    <span className="op-60 transition-opacity">PAST ROLES</span>
                </div>
                {roles.map((item, index) => (
                    <div key={index} className={'justify-between rd-2 px-3 py-2 flex'}>
                        <div className="w-1/2 space-y-0.5">
                            <span className="block text-xs">{item.role}</span>
                            <span className="block text-[10px] text-gray-500">{item.startYear} - {item.endYear}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="flex flex-col items-end">
                                <span className="text-xs cursor-pointer" onClick={() => {
                                    window.open(item.website)
                                }}>{item.name}</span>
                                <span className="text-[10px] text-gray-500">{item.location}</span>
                            </div>
                            {item.icon ? (<img src={item.icon} alt="GetYourGuide" className="w-3.5 h-3.5 mt-1"/>)
                            :(<div className='w-3.5 h-3.5 mt-1'> </div>)}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Roles