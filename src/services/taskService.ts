import axios from "axios";
import config from "./config";
import taskTagService from "./taskTagService";

const baseUrl = "http://localhost:8080/api/tasks";

const populateTags = (id: number) => {
  const tags = taskTagService.getTagsByTaskId(id);
  return tags;
};

const parseTask = async (task: Task) => {
  return {
    ...task,
    deadline: task.deadline ? new Date(task.deadline) : undefined,
    tags: await populateTags(task.id),
  };
};

const getAllTasks = async () => {
  const cfg = config.getAxiosConfig();
  const tasks = await axios
    .get<Task[]>(baseUrl, cfg)
    .then((response) => response.data);
  const populatedTasks = await Promise.all(tasks.map(parseTask));
  return populatedTasks;
};

const getTaskById = async (id: number) => {
  const cfg = config.getAxiosConfig();
  const task = await axios
    .get<Task>(`${baseUrl}/${id}`, cfg)
    .then((response) => parseTask(response.data));
  return task;
};

const createTask = async (task: Task) => {
  const cfg = config.getAxiosConfig();
  const newTask = await axios
    .post(baseUrl, task, cfg)
    .then((response) => parseTask(response.data));
  return newTask;
};

const updateTask = async (task: Task) => {
  const cfg = config.getAxiosConfig();
  const updatedTask = await axios
    .put(`${baseUrl}/${task.id}`, task, cfg)
    .then((response) => parseTask(response.data));
  return updatedTask;
};

const deleteTask = async (id: number) => {
  const cfg = config.getAxiosConfig();
  const response = await axios.delete(`${baseUrl}/${id}`, cfg);
  return response.data;
};

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
