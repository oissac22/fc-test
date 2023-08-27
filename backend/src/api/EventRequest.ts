import { ICallbackData } from "../interfaces/ICallbackData";

export type EventsRequestNames = "beforerequest" | "afterrequest";

export class EventRequest {

    static events:{[key:string]:ICallbackData[]} = {}

    addEvent(eventName:EventsRequestNames, callback:ICallbackData)
    {
        if (!EventRequest.events[eventName])
            EventRequest.events[eventName] = [];
        EventRequest.events[eventName].push(callback)
    }

    removeEvent(eventName:EventsRequestNames, callback:ICallbackData)
    {
        if (EventRequest.events[eventName])
            EventRequest.events[eventName] = EventRequest.events[eventName].filter(cb => cb !== callback);
    }

    exec(eventName:EventsRequestNames, data?:any)
    {
        if (EventRequest.events[eventName])
        {
            return EventRequest.events[eventName].map(callback => callback(data));
        }
    }

}

