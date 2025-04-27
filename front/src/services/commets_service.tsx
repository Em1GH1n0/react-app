import api from "../api/axios";

export const getComments = async () => {
  try {
    const response = await api.get("/comments");
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
