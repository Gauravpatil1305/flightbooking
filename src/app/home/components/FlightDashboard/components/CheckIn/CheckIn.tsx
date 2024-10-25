import React, { useState } from "react";
import PNRCode from "./components/PNRCode/PNRCode";

import { Icon } from "@iconify/react";

const CheckIn: React.FC = () => {
  const [PNRCodeInput, setPNRCodeInput] = useState("");

  return (
    <div className="check-in-wrapper">
      <div className="check-in">
        <PNRCode
          PNRCodeInput={PNRCodeInput}
          setPNRCodeInput={setPNRCodeInput}
        />
        <button className="check-in-button">
          <Icon icon="mdi:check" />
          Check-In
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
