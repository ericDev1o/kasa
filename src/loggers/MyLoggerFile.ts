import { createLogger, format, transports } from 'winston';

export function MyLoggerFile() {
    const loggerFile = createLogger({
        level: 'error',
        format: format.combine(
            format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            format.json()
        ),
        transports: [
            new transports.File({ filename: 'error.log', level: 'error' }),
        ],
    });

    //if (import.meta.env.VITE_NODE_ENV !== 'production') {
        loggerFile.add(
            new transports.Console({
                format: format.combine(format.colorize(), format.simple()),
            })
        );
    //}

    return loggerFile;
}
