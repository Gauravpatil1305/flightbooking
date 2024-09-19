import React from "react";
import { Icon } from "@iconify/react";

const Account = () => {
  return (
    <div className="account">
      <button>
        <Icon icon="material-symbols:supervised-user-circle-outline" />
        <span>Sign In</span>
      </button>
    </div>
  );
};

export default Account;
