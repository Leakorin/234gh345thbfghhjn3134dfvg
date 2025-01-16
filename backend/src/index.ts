import express from 'express';
import userRoutes from './routes/userRoutes';
import referralRoutes from "./routes/referralRoutes";
import blockchainRoutes from "./routes/blockchainRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/api/referrals', referralRoutes);
app.use('/api/blockchain', blockchainRoutes);

app.get('/', (req, res) => {
    res.send('Server is alive for now');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
