export interface IServiceLoginLogin {
    login(login:string, password:string):Promise<{ token:string }>;
}

export interface IServiceLoginLogoff {
    logoff(token: string):Promise<void>;
}

export interface IServiceLoginLogoffEveryMachines {
    logoffEveryMachines(token: string):Promise<void>;
}

export interface IServiceLoginVerifyLoginActived {
    verifyLoginActived(token:string):Promise<null | { new_refresh_token:string }>;
}

export interface IServiceLogin extends IServiceLoginLogin, IServiceLoginLogoff, IServiceLoginLogoffEveryMachines, IServiceLoginVerifyLoginActived {}