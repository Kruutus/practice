import './Login.styles.css';

const Login = ({userName, setUserName}) => {
	return (
		<div className="container">
			<label htmlFor="username" className="label">
				Felhasználónév
			</label>
			<div>
				<input value={userName} id="username" className="input" onChange={(e) => setUserName(e.target.value)} />
			</div>
			<button className="button">
				Bejelentkezés
			</button>
		</div>
)};

export default Login;