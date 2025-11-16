import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExploreHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between">
        <Link to="/profile" className="flex size-12 shrink-0 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User profile picture, a person smiling."
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBllVmS4sXmd0gjLWXCwbfAA2zIa6ogcI8fApQdEwaweuSH7cY9uy5eWcpAFhmpT8hTv5xxNkz8a5-dZ2psdh3Z3OHsqHGjT73yuq_K-7LOL25ghA82Z9-kcKcsywbBNMf9ssxpBQXNWLSv5gstw0DdorJv4pCmp2KwcRBth_BF7nFQdW8fPSIpTFNw1kQcwsUJbbtDKLaqN8Tt9h0oXGMBb7zDOXQSEkvgmvpMJWrj80YGQ1Pxn5pQ4V3u7FBGH3qXNF9ZUh4PH_I")`,
            }}
          ></div>
        </Link>
        <div className="flex w-12 items-center justify-end">
          <Button variant="ghost" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-subtle-dark">notifications</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;