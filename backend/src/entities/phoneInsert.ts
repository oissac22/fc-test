export function phoneAdjustToInsert(phone:string)
{
    return phone.replace(/\D+/g,'');
}