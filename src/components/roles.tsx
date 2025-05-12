const Roles = () => {

    const roles = [
        {
            name: 'ly.com',
            role: 'Intermediate Software Engineer',
            icon: 'src/assets/icons/ly.ico',
            location: 'Chengdu, Sichuan Province, China',
            startYear: '2021',
            endYear: '2024',
            website:"https://www.ly.com/"
        }, {
            name: 'Dmall',
            role: 'R&D Engineer',
            icon: 'src/assets/icons/dmall.png',
            location: 'Chengdu, Sichuan Province, China',
            startYear: '2020',
            endYear: '2021',
            website:"https://www.dmall.com/?language=zh"
        }, {
            name: 'Zhihuiliu Education',
            role: 'Java Developer',
            icon: 'src/assets/icons/zhihuiliu.ico',
            location: 'Chengdu, Sichuan Province, China',
            startYear: '2019',
            endYear: '2019',
            website:"https://www.zhihuiliu.com/"
        }, {
            name: 'Sisyphe Bookstore',
            role: 'Java Developer',
            icon: 'src/assets/icons/sisyphe.ico',
            location: 'Chongqing, China',
            startYear: '2016',
            endYear: '2019',
            website:"https://www.sisyphe.com.cn/"
        },
    ]

    return (
        <div className='pt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-1">
                <div className="flex px-3 py-2 justify-between">
                    <span className="op-60 transition-opacity">EXPERIENCE</span>
                </div>
                {roles.map((item, index) => (
                    <div key={index} className={'justify-between rd-2 px-3 py-2 flex'}>
                        <div className="w-1/2 space-y-0.5">
                            <span className="block text-xs">{item.role}</span>
                            <span className="block text-[10px] text-gray-500">{item.startYear} - {item.endYear}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="flex flex-col items-end">
                                <span className="text-xs cursor-pointer" onClick={()=>{window.open(item.website)}}>{item.name}</span>
                                <span className="text-[10px] text-gray-500">{item.location}</span>
                            </div>
                            <img src={item.icon}
                                 alt="GetYourGuide" className="w-3.5 h-3.5 mt-1"/>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Roles