import express from 'express';
import expeditionRouter from './routers/expeditionRouter.js';
import explorerRouter from './routers/explorerRouter.js';
import speciesRouter from './routers/speciesRouter.js';

import db from './config/db.js';

db();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use('/expedition', expeditionRouter);
app.use('/explorer', explorerRouter);
app.use('/species', speciesRouter);



app.listen(PORT, () => console.log('Servidor iniciado na porta 4000'));