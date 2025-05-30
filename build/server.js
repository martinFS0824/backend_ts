"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_routes_1 = __importDefault(require("./routes/items.routes"));
const database_1 = require("./utils/database");
const logger_1 = require("./middlewares/logger");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./docs/swagger"));
const app = (0, express_1.default)();
const port = 8080;
(0, database_1.connectDB)();
app.use(express_1.default.json());
app.use(logger_1.logger);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use("/items", items_routes_1.default);
app.listen(port, () => {
    console.log("app funcionando en http://localhost:" + port);
});
