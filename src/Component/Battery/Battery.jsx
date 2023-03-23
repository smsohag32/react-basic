// import React from 'react';

// const Battery = () => {

//     return (
//         <div>
//             <div>
//                 <div>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis amet sequi nulla ducimus modi distinctio eius nobis minus provident voluptates illum autem optio et, rerum quaerat accusamus cupiditate eos illo.</p>
//                 </div>
//             </div>
//             <input type="text" onChange={(e) => {
//                 console.log(e.target.value);
//             }} />
//         </div>
//     );
// };

// export default Battery;

// import React, { useState, useEffect } from "react";

// function MyComponent(props) {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     fetchData().then((data) => {
//       setData(data);
//       setIsLoading(false);
//     });
//   }, []);

//   useEffect(() => {
//     if (data) {
//       // Do something with the data
//     }
//   }, [data]);

//   return (
//     <div>
//
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';

// const Battery = () => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false)
//     useEffect(()=> {
//         setIsLoading(true)
//         fetch('https://jsonplaceholder.typicode.com/comments')
//         .then((data) => {
//             setData(data);
//             setIsLoading(false)
//         });
//     }, [])
//      useEffect(() => {
//     if (data) {

//     }
//   }, [data]);

//     return (
//         <div>
//             {isLoading ? <p className='text-center mt-20'>Loading...</p> : console.log(data)}
//         </div>
//     );
// };

// export default Battery;

import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comments";
const Battery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p className="text-2xl text-center">Loading...</p>
      ) : (
        data.map((el) => <Comment {...el} />)
      )}
    </div>
  );
};

export default Battery;
