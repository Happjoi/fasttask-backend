import { Task } from '../models/Task.js';

export const createTask = async (req, res) => {
  const { title } = req.body;
  const userId = req.userId;

  try {
    const newTask = new Task({ title, userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar tarefa.', error });
  }
};

export const getTasks = async (req, res) => {
  const userId = req.userId;

  try {
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas.', error });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const userId = req.userId;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, userId },
      { title, completed },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada.' });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar tarefa.', error });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const task = await Task.findOneAndDelete({ _id: id, userId });
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada.' });

    res.status(200).json({ message: 'Tarefa deletada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar tarefa.', error });
  }
};