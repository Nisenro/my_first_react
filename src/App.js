// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Form">
      <h3>Please fill in the details</h3>
      <div className="">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="+2341111122222"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          About Yourself
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
