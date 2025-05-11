const About = () => {

    const about = "" +
        "I'm a back-end engineer and an amateur front-end developer. " +
        "I love exploring cool technologies and diving into new challenges. " +
        "I'm always curious about tech and design, and I enjoy building small, fun projects." +
        "Whether it’s experimenting with code or exploring design, I like learning and playing around with new ideas." +
        "";
    return (
        <div className='xl:min-w-lg mt-5'>
            <div className="flex px-3 py-2 justify-between">
                <span className="op-60 transition-opacity">ABOUT</span>
            </div>
            <div className="flex px-3 py-2 justify-between">
                <span className="text-sm leading-relaxed">{about}</span>
            </div>

        </div>
    )
}
export default About