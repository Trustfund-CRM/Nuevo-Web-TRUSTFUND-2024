
// import axios from 'axios';
// import { GoogleAuth } from 'google-auth-library';
// const API_KEY = 'AIzaSyC-Rb-ccwCwEUMmhRYZBh-5TEzLZigs0Sw';
// const ACCOUNT_ID = '753873661108-acjahrbesfbf98bepd221jikuvr9sfs3.apps.googleusercontent.com';
// const LOCATION_ID = 'ChIJoYUAHyvmopUR4xJzVPBE_Lw';
// async function getGoogleMyBusinessReviews() {
//   try {
//     const auth = new GoogleAuth({
//       scopes: 'https://www.googleapis.com/auth/business.manage',
//     });
//     const authClient = await auth.getClient();
//     const accessToken = await authClient.getAccessToken();
//     const response = await axios.get(
//       `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews?key=${API_KEY}`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken.token}`,
//         },
//       }
//     );
//     return response.data.reviews;
//   } catch (error) {
//     console.error('Error al obtener las reseñas de Google My Business:', error);
//     return [];
//   }
// }
// export default getGoogleMyBusinessReviews;