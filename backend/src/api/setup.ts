import { Api } from ".";
import cors from 'cors';
import express from 'express'

Api.use(cors({ origin: '*' }));

Api.use(express.json({ inflate:false }))