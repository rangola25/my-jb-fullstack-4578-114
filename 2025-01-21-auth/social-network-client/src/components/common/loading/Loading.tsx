import './Loading.css'
import loadingSource from '../../../assets/images/loading.webp'

interface LoadingProps {
    message: string;
}

export default function Loading({ message }: LoadingProps): JSX.Element {
    return (
        <div className='Loading'>
            <img src={loadingSource} alt="Loading" />
            <p>{message}...</p>
        </div>
    )
}