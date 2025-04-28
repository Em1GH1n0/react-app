const App = require('./app');

const PORT = process.env.PORT || 3000;

App.getServer().listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
