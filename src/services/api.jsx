import { useState, useEffect } from "react";

// export async function API() {
//   //   const [memes, setMemes] = useState([]);
//   //   useEffect(() => {
//   //     fetch("http://localhost:3000/memes")
//   //       .then((res) => {
//   //         return res.json();
//   //       })
//   //       .then((data) => {
//   //         setMemes(data);
//   //       });
//   //   }, []);

// }

export async function getAllMemes() {
  try {
    return await fetch("http://localhost:4000/memes").then((res) => {
      return res.json();
    });
  } catch (error) {
    return [];
  }
}
