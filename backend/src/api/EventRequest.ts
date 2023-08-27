import { ICallbackData } from "../interfaces/ICallbackData";

export class EventRequest {

    static events:{[key:string]:ICallbackData[]} = {}

    addEvent(eventName:string, callback:ICallbackData)
    {
        if (!EventRequest.events[eventName])
            EventRequest.events[eventName] = [];
        EventRequest.events[eventName].push(callback)
    }

    removeEvent(eventName:string, callback:ICallbackData)
    {
        if (EventRequest.events[eventName])
            EventRequest.events[eventName] = EventRequest.events[eventName].filter(cb => cb !== callback);
    }

    exec(eventName:string, data?:any)
    {
        if (EventRequest.events[eventName])
            EventRequest.events[eventName].map(callback => callback(data));
    }

}

