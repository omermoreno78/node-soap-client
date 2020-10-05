const express = require('express');
const app = express();

// #region Settings.
app.set('port', process.env.PORT || 3000);
// #endregion Settings.

// #region Middlewares.
app.use(express.json());
// #endregion Middlewares.

// #region Routes.
app.use('/api/soap', require('./routes/soap'));
// #endregion Routes.

// Starting the server:
app.listen(app.get('port'), () => {
	console.log('Server on port ', app.get('port'));
});