var winston = require('winston');
const { transports, createLogger, format } = require('winston');
const { combine, timestamp, prettyPrint } = format;
var moment = require('moment');
require('winston-daily-rotate-file');
var transport = new (winston.transports.DailyRotateFile)({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '2m',
    maxFiles: '14d',
    format: winston.format.prettyPrint(),
    timestamp: true
}
);
var error_transport = new (winston.transports.DailyRotateFile)({
    level:'error',
    filename: 'logs/application-%DATE%-error.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '2m',
    maxFiles: '14d',
    format: winston.format.prettyPrint(),
    timestamp: true
}
);
transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun 
});
var logger = winston.createLogger({
    format: combine(
        timestamp({
            format: () => {
                return moment().format("YYYY-MM-DD HH:mm:ss");
            }
        }),
        prettyPrint()
    ),
    transports: [
        transport,error_transport
    ]
});
logger.info('Log start.');
//logger.error('Log start.');
module.exports = logger;