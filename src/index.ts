import app from './app';
import './database';

// effectively launches server on designated port
app.listen(app.get('port'), () =>
{
    console.log('server on port', app.get('port'));
})