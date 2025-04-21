import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config(); // carrega as variáveis de ambiente do .env

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // para aceitar JSON no corpo das requisições

// Rotas
app.use('/api/auth', authRoutes);  // Rotas de autenticação
app.use('/api/tasks', taskRoutes); // Rotas de tarefas

// Rota de test (pode remover depois)
app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});

// Configuração da porta
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});