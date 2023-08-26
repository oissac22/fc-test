export interface IServiceLoginLogin {
    login(login:string, password:string):Promise<{ token:string }>;
}

export interface IServiceLoginLogoff {
    logoff(login:string, password:string):Promise<void>;
}

export interface IServiceLoginLogoffEveryMachines {
    logoffEveryMachines(login:string, password:string):Promise<void>;
}

export interface IServiceLoginVerifyLoginActived {
    verifyLoginActived(token:string):Promise<boolean>;
}

export interface IServiceLogin extends IServiceLoginLogin, IServiceLoginLogoff, IServiceLoginLogoffEveryMachines, IServiceLoginVerifyLoginActived {}