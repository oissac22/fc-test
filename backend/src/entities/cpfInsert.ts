export function cpfAdjustToInsert(cpf:string)
{
    return cpf.replace(/\D+/g,'');
}