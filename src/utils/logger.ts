import { consoleTransport, logger } from "react-native-logs";

// ###################
// The level you want to filter out in the console and not print
const SEVERITY = "debug";
// ###################

// ###################
// Set to false to disable all logs
const isJest = typeof jest !== "undefined";
export const LOGGING_ENABLED = !isJest && __DEV__;
// ###################

// ###################
// LOGGING_EXTENSIONS
const LOGGING_EXTENSIONS = {};
//  ###################

// ###################
// Add the extensions you want to enable here or set to an empty array to enable all
//  ###################
const ENABLED_EXTENSIONS: never[] | string[] = [];

type LoggingLevels = "debug" | "info" | "warn" | "error";

const loggerInstance = logger.createLogger<LoggingLevels>({
	levels: {
		debug: 0,
		info: 1,
		warn: 2,
		error: 3
	},
	severity: SEVERITY,
	transport: consoleTransport,
	transportOptions: {
		colors: {
			info: "blueBright",
			warn: "yellowBright",
			error: "redBright"
		}
	},
	enabled: LOGGING_ENABLED,
	enabledExtensions: ENABLED_EXTENSIONS,
	async: true,
	dateFormat: "time",
	printLevel: true,
	printDate: true,
	fixedExtLvlLength: false
});

const start = () => {
	console.log("███████╗████████╗ █████╗ ██████╗ ████████╗");
	console.log("██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝");
	console.log("███████╗   ██║   ███████║██████╔╝   ██║   ");
	console.log("╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ");
	console.log("███████║   ██║   ██║  ██║██║  ██║   ██║   ");
	console.log("╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ");
};

export const logging = {
	...loggerInstance,
	start
};
