import { Router } from 'express';
import { createCaracteristica, findByLikeCaracteristica } from '../Controllers/Caracteristica';

export const caracteristica_router = Router();

caracteristica_router.post('/caracteristica', createCaracteristica);
caracteristica_router.get('/caracteristica/:palabra', findByLikeCaracteristica);