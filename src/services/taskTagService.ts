import axios from "axios";
import config from "./config";

const baseUrl = "http://localhost:8080/api/tasktags";

const createTaskTag = (taskId: number, tagId: number): TaskTag => {
  return {
    task_id: taskId,
    tag_id: tagId,
  };
};

const addTagToTask = async (taskId: number, tagId: number) => {
  const cfg = config.getAxiosConfig();
  const payload = createTaskTag(taskId, tagId);
  const response = await axios.post(`${baseUrl}`, payload, cfg);
  return response.data;
};

const removeTagFromTask = async (taskTagId: number) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.delete(`${baseUrl}/${taskTagId}}`, cfg);
  return response.data;
};

const getTagsByTaskId = async (taskId: number) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.get<Tag[]>(`${baseUrl}/tags/${taskId}`, cfg);
  return response.data;
};

const getTasksByTagId = async (tagId: number) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.get<Task[]>(`${baseUrl}/tasks/${tagId}`, cfg);
  return response.data;
};

export default {
  addTagToTask,
  removeTagFromTask,
  getTagsByTaskId,
  getTasksByTagId,
};
