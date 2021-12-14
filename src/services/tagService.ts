import axios from "axios";
import config from "./config";

const baseUrl = "http://localhost:8080/api/tags";

const parseTag = (tag: Tag): Tag => {
  return {
    ...tag,
  };
};

const getAllTags = async () => {
  const cfg = config.getAxiosConfig();
  const response = await axios.get<Tag[]>(baseUrl, cfg);
  return response.data.map(parseTag);
};

const getTagById = async (id: number) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.get(`${baseUrl}/${id}`, cfg);
  return response.data.map(parseTag);
};

const createTag = async (tag: Tag) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.post(baseUrl, tag, cfg);
  return response.data;
};

// Not implemented in server
const updateTag = async (tag: Tag) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.put(`${baseUrl}/${tag.id}`, tag, cfg);
  return response.data;
};

const deleteTag = async (id: number) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.delete(`${baseUrl}/${id}`, cfg);
  return response.data;
};

export default {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
