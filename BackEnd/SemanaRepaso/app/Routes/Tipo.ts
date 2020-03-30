import { Router } from 'express';
import { getAllTipos, createTipo, getByPkTipo, updateTipo, deleteTipo, activarTipo } from '../Controllers/Tipo';

export const tipo_router = Router();

tipo_router.get('/tipos', getAllTipos);
tipo_router.post('/tipo', createTipo);
tipo_router.get('/tipo/:tipo_id', getByPkTipo);
tipo_router.put('/tipo/:tipo_id', updateTipo);
tipo_router.delete('/tipo/:tipo_id', deleteTipo);
tipo_router.post('/tipo/:tipo_id', activarTipo);
