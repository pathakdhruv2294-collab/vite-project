import "./App.css";
import { OTPInput } from "./component/OTPInput";

function App() {
	return (
		<div className="app">
			<h2>Enter OTP</h2>
			<p>Enter the 4-digit code.</p>
			<OTPInput />
		</div>
	);
}

export default App;
