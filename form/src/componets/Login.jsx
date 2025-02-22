// eslint-disable-next-line react/prop-types
export default function Login({password, setPassword, email, setEmail, handleLogin}) {
  return (
    <div>
      <h2>Login</h2>
      <label>email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar secion</button>
    </div>
  );
}