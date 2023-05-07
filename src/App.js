import { useState } from "react";
import "./App.css";
import OtpVerification from "./components/OtpVerification";

function App() {
  const [otp, setOtp] = useState("");
  const handleOnchange = (e) => {
    setOtp(e);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="items-center text-center h-96 border w-96" >
        <h1 className="p-6 text-3xl">Phone Verification</h1>
        <hr/>
        
        <h1 className="py-2 pb-10 text-gray-600">Enter OTP You Recieved On 955473XXXX</h1>
        <div>
          <OtpVerification
            otp={otp}
            handleOnchange={handleOnchange}
            valueLength={6}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
