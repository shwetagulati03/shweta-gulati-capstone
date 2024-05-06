import Button from "../../components/Button/Button";
import "./LoginPage.scss";
import axios from "axios";

export default function Login({ setIsLoggedIn }) {
  const handleSubmit = async (event) => {
   
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log(username, password);

    try {
     
      const response = await axios.post("http://localhost:8080/users", {
        username: username,
        password: password,
      });
      console.log(response);

      const accessToken = response.data.access_token;

      localStorage.setItem("authToken", accessToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>

        <label className="login__field">
          Username:
          <input className="login__input" type="text" name="username" />
        </label>

        <label className="login__field">
          Password:
          <input className="login__input" type="password" name="password" />
        </label>

        <div className="login__button-container">
        <Button>Login</Button>
        </div>
        
      </form>
    </main>
  );
}
