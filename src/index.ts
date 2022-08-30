import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';
import config from './config/config'

// Constants
const serverStartMsg = 'Express server started on port: ',
        port = (config.port);

// Start server
server.listen(port, () => {
    logger.info(serverStartMsg + port);
});
