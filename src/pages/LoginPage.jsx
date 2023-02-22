import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/Login.css";
import Button from "react-bootstrap/Button";
const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { login, error } = useAuth();
	return (
		<div className='login-block'>
			<div className='registration-content'>
				<h2 style={{ marginTop: "50px" }}>Login User</h2>
				{error ? <h3>{error}</h3> : ""}
				<input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
				<input type='text' placeholder='Password' onChange={e => setPassword(e.target.value)} />
				<Button className='button2' variant='outline-secondary' onClick={() => login(username, password)}>
					Login
				</Button>
			</div>
		</div>
	);
};

export default LoginPage;
