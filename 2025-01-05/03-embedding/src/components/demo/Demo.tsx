import './Demo.css'

export default function Demo(): JSX.Element {
    
    const name = 'Kfir'
    const age = 22
    const isAdult = age > 18    
    const grades = [70, 80, 90]
    function sayHi() {
        alert('hi')
    }

    const dogs = [
        {
            id: 1,
            name: 'alpha',
            age: 5
        },
        {
            id: 2,
            name: 'magma',
            age: 4
        }
    ]

    return (
        <div className='Demo'>
            <p>hello {name}</p>
            <p>you are {age} years old</p>
            <p>you are an {isAdult ? 'adult' : 'child'}</p>
            {/* <p>your grades are {grades[0]}</p> */}
            <p>your grades are:</p>
            <ul>
                {grades.map((grade, index) => <li key={index}>{grade}</li>)}
            </ul>
            <button onClick={sayHi}>hi</button>
            <p>dogs:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map(({id, name, age}) => <tr key={id}>
                        <td>{name}</td>
                        <td>{age}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}