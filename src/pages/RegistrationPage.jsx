import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/RegistrationPage.css";
import Button from "react-bootstrap/Button";

const RegistrationPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { register, error } = useAuth();
	return (
		<div className='registation-block'>
			<div className='registration-content'>
				<h2 style={{ marginTop: "50px" }}>Register User</h2>
				{error ? <h3>{error}</h3> : ""}
				<div>
					<input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
				</div>
				<div>
					<input type='text' placeholder='Password' onChange={e => setPassword(e.target.value)} />
				</div>
				<div className='button-block'>
					<Button className='button1' variant='outline-secondary' onClick={() => register(username, password)}>
						Register
					</Button>
				</div>
			</div>
		</div>
	);
};

export default RegistrationPage;
// style={{ position: "absolute", transform: "234px" }}
