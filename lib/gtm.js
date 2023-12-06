// // File: myScript.js

// // Define the WindowWithDataLayer type
// const window = window || {};
// window.dataLayer = window.dataLayer || [];

// // Export GTM_ID constant
// export const GTM_ID = 'GTM-KC5WLW4';
// console.log(GTM_ID)

// // Export the pageview function
// export const pageview = (url) => {
//   if (typeof window.dataLayer !== "undefined") {
//     window.dataLayer.push({
//       event: "pageview",
//       page: url,
//     });
//   } else {
//     console.log({
//       event: "pageview",
//       page: url,
//     });
//   }
// };

// // Export the constants and functions
// // export default { GTM_ID, pageview };
