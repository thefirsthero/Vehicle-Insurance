const ENV_HOST = process.env.REACT_APP_HOST;
const ENV_USER = process.env.REACT_APP_USER;
const ENV_PASS = process.env.REACT_APP_PASS;
const ENV_DB = process.env.REACT_APP_DB;

module.exports = {
    HOST: ENV_HOST,
    USER: ENV_USER,
    PASSWORD: ENV_PASS,
    DB: ENV_DB
};
