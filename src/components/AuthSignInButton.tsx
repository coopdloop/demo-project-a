"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@/ui/button";

const AuthSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl")!;

  return (
    <Button className="w-full text-black" onClick={() => signIn("auth0", { callbackUrl })}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Auth0"
        role="img"
        className='mr-2 w-10'

        viewBox="0 0 512 512"
      >
        {/* <rect width="512" height="512" rx="15%" fill="#ffffff" /> */}
        <path
          d="M358.1 378.8L319.6 260L420.5 186.9H295.7l-38.6-118.7l-.01-.03h124.8l38.6 118.7v-.003l0.03-.02c22.4 68.8-.7 147 -62.4 192zm-201.9 0l-.036 .03L257.13 452.2L358.09 378.84L257.17 305.51ZM93.85 186.85c-23.57 72.57 3.79 149.46 62.36 192l0.01-.036L194.77 260.17L93.89 186.87H218.6L257.15 68.2L257.2 68.2H132.4Z"
          fill="#eb5424"
        />
      </svg>
      Continue with Auth0
    </Button>
  );
};

export default AuthSignInButton;
