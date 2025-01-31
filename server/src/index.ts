import express from 'express';
import homePageRoute from './routes/home.js';
import carsApiRoute from './routes/api/cars.js';
import aboutPageRoute from './routes/about.js';
import carSearchRoute from './routes/search.js';
import userLoginApiRoute from './routes/api/users.js';


const app = express();
const PORT = process.env.PORT || 3001;

app.use('/', homePageRoute);
app.use('/api/cars', carsApiRoute);
app.use('/about', aboutPageRoute);
app.use('/search', carSearchRoute);
app.use('/api/users', userLoginApiRoute);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
