import { useRef } from "react";
import "./OTPInput.css";

export function OTPInput() {
	const inputs = useRef([]);

	function handleChange(event, index) {
		event.target.value = event.target.value.replace(/\D/g, "").slice(-1);

		if (event.target.value && index < 3) {
			inputs.current[index + 1].focus();
		}
	}

	function handleKeyDown(event, index) {
		if (event.key === "Backspace" && !event.target.value && index > 0) {
			inputs.current[index - 1].focus();
		}
	}

	return (
		<div className="otp-input">
			{[0, 1, 2, 3].map((index) => (
				<input
					key={index}
					ref={(element) => (inputs.current[index] = element)}
					type="text"
					inputMode="numeric"
					maxLength={1}
					aria-label={`OTP digit ${index + 1}`}
					onChange={(event) => handleChange(event, index)}
					onKeyDown={(event) => handleKeyDown(event, index)}
				/>
			))}
		</div>
	);
}
