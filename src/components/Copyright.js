import React from "react";

const Copyright = () => {
  const dat = new Date().getFullYear();
  return (
    <h6 className="text-center text-white">
      Website by Sayush Kamat &copy;{dat}
    </h6>
  );
};

export default Copyright;
