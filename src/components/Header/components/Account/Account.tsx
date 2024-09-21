import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Account = () => {
  return (
    <div className="account">
      <Link href="/contact">
          <Icon icon="material-symbols:supervised-user-circle-outline" />
          <span>Sign In</span>
      </Link>
    </div>
  );
};

export default Account;
