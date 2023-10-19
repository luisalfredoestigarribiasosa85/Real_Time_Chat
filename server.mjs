import 'dotenv/config';
import express from 'express';
import { connect, model } from 'mongoose';
import { join } from 'path';
import cors from 'cors';

const app = express(); // Initialize app here

// Enable CORS after initializing app
app.use(cors());

// Rest of your code remains the same



const dbUrl = process.env.MONGODB_URL;

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

let Mensaje = model('Mensaje', { nombre: String, mensaje: String });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let servidor = app.listen(3000, () => {
    console.log('El servidor se está ejecutando en el puerto', servidor.address().port);
});

const __dirname = join(new URL(import.meta.url).pathname, '../');

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Server is running.'); // Response for the root path
});

app.get('/mensajes', async (req, res) => {
    try {
        const mensajes = await Mensaje.find({});
        res.send(mensajes);
    } catch (err) {
        console.error('Error retrieving messages from MongoDB:', err);
        res.sendStatus(500);
    }
});

app.post('/mensajes', (req, res) => {
    const mensaje = new Mensaje(req.body);
    mensaje.save()
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error('Error saving message to MongoDB:', err);
            res.sendStatus(500);
        });
});
