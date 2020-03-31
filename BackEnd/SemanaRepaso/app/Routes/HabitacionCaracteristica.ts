import { Router } from 'express';
import { createHabCaract } from '../Controllers/HabitacionCaracteristica';

export const habcaract_router = Router();

habcaract_router.post('/habcaract', createHabCaract);