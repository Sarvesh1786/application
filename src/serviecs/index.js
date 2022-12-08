import axios from "axios";
const baseUrl = "http://localhost:3004";
const addDataUrl = `${baseUrl}/signup`;

//********************* Post Data ******************** */

export const postData = async (data) => {
  let res = await axios.post(`${addDataUrl}`, data);
  return res.data;
};

//*************************************************** */
