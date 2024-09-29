"use client";

import React, { useEffect, useState } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popUpMessage" style={{ backgroundColor: "#dc3545" }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
