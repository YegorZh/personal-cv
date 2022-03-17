const express = require('express');
import { Express } from 'express';
const app = express() as Express;

app.use(express.static('./public'));

const port: string = process.env.PORT || '8000';
app.listen(port, () => console.log('Listening in port ' + port));