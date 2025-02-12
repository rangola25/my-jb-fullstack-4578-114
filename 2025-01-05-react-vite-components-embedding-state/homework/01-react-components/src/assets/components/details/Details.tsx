import './Details.css'

export default function Details(): JSX.Element {
    
    const photos = [
            <img src="ItalyRan.jpeg" alt=""/>,
            <img src="lulaRan.jpeg" alt=""/>,
            <img src="spagettiRan.jpeg" alt=""/>
        ]
        
    function getRandomPhoto() {
        return photos[Math.floor(Math.random() * (2 - 0 + 1))]
    }

    return (
        <div className='details'>
        <h2>Who am i?</h2>
        <p>I am a software developer...</p>
        <div className='photo'>
            {getRandomPhoto()}
            </div>
        </div>
    )
}