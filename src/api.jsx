// src/api.js

export const ActivitiesData = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL);
    if (res.status === 200) {
      const data = await res.json();
      return data.data; // Assuming data is nested under a `data` key
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (err) {
    console.log(err);
    return []; // Return an empty array in case of error
  }
};
