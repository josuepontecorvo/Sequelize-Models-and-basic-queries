const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/movies', moviesRoutes);
app.use('/genres', genresRoutes);
app.use('/actors', actorsRoutes);

const port = process.env.PORT || "3001"
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
