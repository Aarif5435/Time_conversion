

const Time_Conversion = require("../src/time");

const {expect , test , describe} = require("@jest/globals");

describe("Should able to convert miliseconds inot hours, minutes, seconds", function(){
    test("should convert into seconds",function(){
        expect(Time_Conversion(5200 )).toBe(5 +" seconds")
    });

    test("should convert into minutes",function(){
        expect(Time_Conversion(180000 )).toBe(3 +" minutes")
    });

    test("should convert into hours",function(){
        expect(Time_Conversion(3600000)).toBe(1 +" hours")
    });
})