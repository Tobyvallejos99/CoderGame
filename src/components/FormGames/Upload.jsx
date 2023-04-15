// import { useState } from "react";

// const Upload = () => {
//   const [image, setImage] = useState("");

//   const upload = async (e) => {
//     const files = e.target.files;
//     const data = new FormData();
//     data.append("file", files[0]);
//     data.append("upload_preset", "staffsphere");

//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/dtqhqhc9e/image/upload",
//       {
//         method: "POST",
//         body: data,
//       }
//     );
//     const file = await res.json();
//     setImage(file.secure_url);
//     console.log(file.secure_url);
//     handleChangeImage(file.secure_url);
//   };
//   return <div></div>;
// };

// export default Upload;
