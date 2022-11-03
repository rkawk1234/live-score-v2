import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('') 
    const [password, setPassword] = useState('')
    

    

    async function registerUser(event) {
        
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,

			}),
		})

		const data = await response.json()


		if (data.status === 'ok') {
			navigate('/')
		}
	}
    return <div className='flex flex-col h-screen w-full '>
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit ={registerUser} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 font-myFont text-3xl text-center">Sign up</h1>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Full Name" />

            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Email" />

            <input 
                value ={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Password" />

            <button
                type="submit"
                value = "Register"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create Account</button>
        </form>

    </div>

</div>
}

export default Register
