import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'


export default function App(): JSX.Element {
  return (
    <div className="App">
    <BrowserRouter>
                <Layout />
    </BrowserRouter>
</div>
  )
}
