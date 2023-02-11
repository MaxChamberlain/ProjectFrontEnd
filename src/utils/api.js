import axios from "axios";

export const getLogs = async (searchText) => {
  const { data } = await axios.get(
    import.meta.env.VITE_API_URL + "/api/logs?search=" + searchText
  );
  const logs = data.split(/\r?\n/);
  return logs.filter((e) => e);
};
