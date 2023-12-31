import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const clearFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName: string) => {
    const clearName = clearFileName(fileName);

    if (clearName !== "indexR") {
        const moduleRouter = require(`./${clearName}`);
        console.log(`se esta cargando la ruta ${clearName}`);
        router.use(`/${clearName}`, moduleRouter.router);
    }
});

export { router };
