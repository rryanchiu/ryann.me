const Projects = () => {

    const projects = [{
        name: 'Radiogram',
        url: 'https://radiogram.ryann.me/',
    }, {
        name: 'Smart Dalton',
        url: 'https://chatgpt.ryann.me/',
    }, {
        name: 'TinyURL',
        url: 'https://tinyurl.ryann.me/',
    }]

    return (
        <div className='pt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-1">
                <div className="flex px-3 py-2 justify-between">
                    <span className="op-60 transition-opacity">PROJECTS</span>
                </div>
                {projects.map((item, index) => (
                    <div key={index}
                         className={'justify-between rd-2 px-3 py-2 flex gap-4 cursor-pointer hover:bg-dark-2 hover:color-gray-1'}
                         onClick={() => {
                             window.open(item.url)
                         }}>

                        <div className={' grid '}>
                            <span className={'font-700'}>  {item.name}</span>
                        </div>
                        <i className="ri-arrow-right-line text-xl"></i>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects