// import React, { useEffect } from 'react';

// const LordIcon = () => {
//   useEffect(() => {
//     // Dynamically load the lord-icon script
//     const script = document.createElement('script');
//     script.src = './assets/js/lord-icon-2.1.0.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Clean up script when component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <lord-icon
//       src="./assets/img/json/Global.json"
//       trigger="loop"
//       colors="primary:#121331,secondary:#650909"
//       stroke="30"
//       style={{ width: '100px', height: '100px' }}
//     ></lord-icon>
//   );
// };

// export default LordIcon;
