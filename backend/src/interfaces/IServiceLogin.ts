export interface IServiceLogin {
    login(login:string, password:string):Promise<{ token:string }>;
    logoff(login:string, password:string):Promise<void>;
    logoffEveryMachines(login:string, password:string):Promise<void>;
    verifyLoginActived(token:string):Promise<boolean>;
}