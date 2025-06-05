import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="box ml-108 border-2 w-96 h-full border-gray-200">
      <h1 className="text-2xl ml-4"><b>Welcome to PopX</b></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to ="/register">
      <button className="bg-violet-700 w-88 mr-4 ml-4 border rounded text-white border-violet-700 cursor-pointer"><b>Create Account</b></button>
      </Link>
      <br />
      <Link to="/login">
      <button className="bg-violet-300 w-88 mr-4 ml-4 border rounded border-violet-300 cursor-pointer"><b>Already Registered? Login</b></button>
      </Link>
    </div>
  );
}

export default Welcome;