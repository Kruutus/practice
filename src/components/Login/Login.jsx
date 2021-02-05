import './Login.styles.css';

const Login = ({userName, setUserName, password, setPassword}) => {
	return (
		<div className="container">
			<label htmlFor="username" className="label">
				Felhasználónév
			</label>
			<div>
				<input 
					value={userName} 
					id="username" 
					className="input" 
					onChange={(e) => setUserName(e.target.value)} 
				/>
			</div>
			<label 
				htmlFor="password" 
				className="label"
			>
				Jelszó
			</label>
			<div>
        <input 
          value={password} 
          className="input" 
          onChange={(e) => setPassword(e.target.value)} 
        />
			</div>
			<div>
				<label className="label">Jegyezd meg a jelszavam
					<input type="checkbox" name="password" chacked="" />
				</label>
			</div>
			<button className="button">
				Bejelentkezés
			</button>
			<a className="label" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Elfelejtettem a jelszavam</a>
		</div>
)};

export default Login;