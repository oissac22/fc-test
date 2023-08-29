import express from 'express';
import { PATH_FRONTEND } from '../config';
import { Api } from '../api';

Api.use(express.static(PATH_FRONTEND));