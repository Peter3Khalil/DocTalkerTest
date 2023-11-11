import { useRouter } from "next/router";
import React from "react";

const SingleChat = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return <div>{id}</div>;
};

export default SingleChat;
