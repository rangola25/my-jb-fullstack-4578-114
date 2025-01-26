import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo(): JSX.Element {
    
    const startTime = useRef<string>(new Date().toLocaleString())
    const [currentTime, setCurrentTime] = useState<string>(startTime.current)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('modifying time...')
            setCurrentTime(new Date().toLocaleString())  
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className='Demo'>
            <p>start time: {startTime.current}</p>
            <p>current time: {currentTime}</p>
        </div>
    )
}