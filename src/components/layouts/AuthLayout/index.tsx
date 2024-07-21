import { PropsWithChildren, useEffect } from "react";

export function AuthLayout({children}:PropsWithChildren) {
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      window.location.href = "/";
    }
  });

  return (
    <>
      {children}
    </>
  );
}
