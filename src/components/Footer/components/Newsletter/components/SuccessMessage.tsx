"use client";

import React, { useEffect, useState } from "react";

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popUpMessage" style={{ backgroundColor: "#28a745" }}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
