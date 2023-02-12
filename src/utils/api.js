import axios from "axios";

export const getLogs = async (searchText) => {
  const { data } = await axios.get(
    import.meta.env.VITE_API_URL + "/api/logs?search=" + searchText
  );
  console.log(data);
  return JSON.parse(data);
};
