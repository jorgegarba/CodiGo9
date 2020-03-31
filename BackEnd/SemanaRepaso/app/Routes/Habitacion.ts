import { getAllHabitacion, createHabitacion } from '../Controllers/Habitacion';
import { Router } from 'express';

export let habitacion_router = Router();
habitacion_router.get('/habitaciones',getAllHabitacion);
habitacion_router.post('/habitacion',createHabitacion);