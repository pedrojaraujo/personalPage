import React, { useState, useEffect } from "react";

function ImageFetcher() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(
      "https://media.licdn.com/dms/image/D4D03AQFgMrIiBJGP9A/profile-displayphoto-shrink_800_800/0/1682284281277?e=1689206400&v=beta&t=CdefqgranTcvDRrxr6eV1L-NJIYtywFoPwsSW9du2PU"
    )
      .then((r) => r.blob())
      .then((blob) => {
        setImage(URL.createObjectURL(blob));
      });
  }, []);

  return (
    <img
      src={image}
      alt="Profile-img"
      className="
    rounded-full
    w-52
    my-10
    mx-auto
    shadow-lg shadow-slate-500 "
    />
  );
}

export default ImageFetcher;
