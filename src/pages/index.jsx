import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex gap-3">
        <Button page="login" />
        <Button page="signup" />
      </div>
    </div>
  );
};
function Button({ page }) {
  return (
    <Link
      className={`
  flex
  w-fit
  items-center
  justify-center
  rounded-md
  bg-black
  px-6
py-2
capitalize
text-white
`}
      href={`/auth/${page}`}
    >
      {page}
    </Link>
  );
}
export default Home;
