export function adjustPhoneDDIOnlyNumber(phoneOnlyNumber:string)
{
    if ( phoneOnlyNumber.length <= 11 )
        return '55' + phoneOnlyNumber;
    return phoneOnlyNumber;
}