export default function LoginPage({ setIsLoggedIn }) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="login-page">
      <h1>Welcome to AeroHangar</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
