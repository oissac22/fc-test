import { Api } from ".";
import cors from 'cors';
import express from 'express'

Api.use(
    cors({
        origin: (origin, callback) => {
            callback(null, true);
        },
        credentials: true
    })
);

Api.use(express.json({ inflate:false }))