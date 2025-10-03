// apiGetLendings.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiGetItems = async ({
  filter = "",
  sortBy = "",
  sortDir = "",
} = {}) => {
  try {
    // pass filter / sortBy / sortDir as query parameters
    const { data } = await axios.get("/api/items", {
      params: { filter, sortBy, sortDir },
    });
    // Backend (Mirage) returns { items: [...] }
    return { error: null, data: data.items };
  } catch (err) {
    return { error: err, data: null };
  }
};

/* In this getItem any value you passed filter,sortBy,sortDir 
   it iterates as parames see param:{f,s,dir} based on that 
   it internally filtered & gets you data as response  */
