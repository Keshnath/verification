import React, { useMemo } from "react";
import { RE } from "../Helper";

const OtpVerification = ({ otp, handleOnchange, valueLength }) => {
  const valueItems = useMemo(() => {
    let items = [];
    const otpArr = otp.split("");
    for (let i = 0; i < valueLength; i++) {
      let char = otpArr[i];
      if (char) {
        items.push(char);
      } else {
        items.push("");
      }
    }
    return items;
  }, [otp, valueLength]);

  const inputOnchange = (e, idx) => {
    // on change of value and also check the chartype
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const newValue =
      otp.substring(0, idx) + targetValue + otp.substring(idx + 1);

    handleOnchange(newValue);

    if (!isTargetValueDigit) {
      return;
    }

    const nextElementSibling = target.nextElementSibling;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const handleOnKeyPress = (e) => {
    // removing of items and back focus
    const target = e.target;
    const value = target.value;
    if (!e.key === "Backspace" || value != " ") {
      return;
    }
    const previousElementSibling = target.previousElementSibling;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const handleOnFocus = (e) => {
    // to change the digits
    const target = e.target;
    target.setSelectionRange(0, 1);
  };

  return (
    <div>
      {valueItems.map((e, ind) => (
        <input
          className="border-b border-black w-9 text-center m-2"
          type="text"
          value={e}
          key={ind}
          maxLength={6}
          onChange={(e) => {
            inputOnchange(e, ind);
          }}
          onKeyDown={handleOnKeyPress}
          onFocus={handleOnFocus}
        />
      ))}
      <div className="flex justify-between m-6">
        <h1 className="text-blue-500">Change Number</h1>{" "}
        <h1 className="text-blue-500">Re-send OTP</h1>
      </div>
      <div>
        <button className="border border-black rounded-full px-7 py-2 bg-green-300">
          Verify Phone Number
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
