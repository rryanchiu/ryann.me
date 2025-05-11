import {TypeAnimation} from 'react-type-animation';

const Hello = () => {

    const MySequence = [
        220,
        'Hi👋👋, I\'m Ryan,\na Full-Stack Developer based in China.'
    ]

    return (
        <div className="min-h-[200px] sm:min-h-[120px]">
            <TypeAnimation
                sequence={MySequence}
                cursor={true}
                repeat={0}
                style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    whiteSpace: 'pre-line',
                    display: 'block'
                }}
            />

        </div>
    )
}
export default Hello