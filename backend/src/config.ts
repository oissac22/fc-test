import path from 'path';

export const PORT = Number(process.env.PORT || "4444") ;

export const PATH_ROOT = path.join(__dirname, '..');
export const PATH_HTML = path.join(PATH_ROOT, 'html');
export const PATH_DATABASE = path.join(PATH_ROOT, 'database');
export const PATH_FRONTEND = path.join(PATH_ROOT, process.env.PATH_FRONTEND || '../frontend/dist')

export const AUTHORIZATION_WEB = process.env.AUTHORIZATION_WEB || "TZjlUKjhSpSV4axgGec6bvLuUlPnBgl7" ;
export const AUTHORIZATION_MOBILE = process.env.AUTHORIZATION_MOBILE || "JanHWrsUCHqlW4McUsFJDg147J5QZ0W1" ;
export const KEY_LOGIN_LONG_TIME = process.env.KEY_LOGIN_LONG_TIME || "8yH31AWWXSEtNtEJodQyfcYLak9RdeRP" ;
export const KEY_LOGIN_SHORT_TIME = process.env.KEY_LOGIN_SHORT_TIME || "xTgUU76yksorNKlHFQcCxBKUyEZCchUX" ;
export const TOKEN_LONG_TIME_EXPIRE = process.env.TOKEN_LONG_TIME_EXPIRE || '30d';
export const TOKEN_SHORT_TIME_EXPIRE = process.env.TOKEN_LONG_TIME_EXPIRE || '1m';
