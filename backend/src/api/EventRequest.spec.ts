import { EventRequest } from "./EventRequest"

describe('EventRequest class', () => {

    it("add and run events", () => {
        let count1 = 0;
        let count2 = 0;

        const f11 = () => count1++;
        const f12 = () => count1++;
        const f13 = () => count1++;

        const f21 = () => count2 += 5;
        const f22 = () => count2 += 5;

        new EventRequest().addEvent('inc1', f11)
        new EventRequest().addEvent('inc1', f12)
        new EventRequest().addEvent('inc1', f13)

        new EventRequest().addEvent('inc2', f21)
        new EventRequest().addEvent('inc2', f22)

        expect(count1).toBe(0);
        expect(count2).toBe(0);
        
        new EventRequest().exec('inc1');
        
        expect(count1).toBe(3);
        expect(count2).toBe(0);

        new EventRequest().exec('inc1');
        
        expect(count1).toBe(6);
        expect(count2).toBe(0);

        new EventRequest().exec('inc2');
        
        expect(count1).toBe(6);
        expect(count2).toBe(10);

        new EventRequest().removeEvent('inc1', f12);
        new EventRequest().removeEvent('inc1', f13);

        new EventRequest().exec('inc1');
        new EventRequest().exec('inc2');
        
        expect(count1).toBe(7);
        expect(count2).toBe(20);

        new EventRequest().removeEvent('inc2', f21);

        new EventRequest().exec('inc1');
        new EventRequest().exec('inc2');
        
        expect(count1).toBe(8);
        expect(count2).toBe(25);

        new EventRequest().removeEvent('inc2', f21);

        new EventRequest().exec('inc1');
        new EventRequest().exec('inc2');
        
        expect(count1).toBe(9);
        expect(count2).toBe(30);

        new EventRequest().removeEvent('invalid1', f11);
        new EventRequest().removeEvent('invalid2', f22);

        new EventRequest().exec('inc1');
        new EventRequest().exec('inc2');
        
        expect(count1).toBe(10);
        expect(count2).toBe(35);

    })

})