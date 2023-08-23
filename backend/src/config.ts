import path from 'path';

export const PORT = Number(process.env.PORT || "4444") ;

export const PATH_ROOT = path.join(__dirname, '..');

export const AUTHORIZATION_WEB = process.env.AUTHORIZATION_WEB || "TZjlUKjhSpSV4axgGec6bvLuUlPnBgl7" ;
export const AUTHORIZATION_MOBILE = process.env.AUTHORIZATION_MOBILE || "JanHWrsUCHqlW4McUsFJDg147J5QZ0W1" ;
export const KEY_LOGIN_LONG_TIME = process.env.KEY_LOGIN_LONG_TIME || "8yH31AWWXSEtNtEJodQyfcYLak9RdeRP" ;
export const KEY_LOGIN_SHORT_TIME = process.env.KEY_LOGIN_SHORT_TIME || "xTgUU76yksorNKlHFQcCxBKUyEZCchUX" ;