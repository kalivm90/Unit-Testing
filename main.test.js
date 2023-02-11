import { capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./main";

test('capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("hi, how are you?")).toBe("Hi, How Are You?");
    expect(capitalize("Nice")).toBe("Nice");
});

test("reverseString", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("nice to see you")).toBe("uoy ees ot ecin");
})

test("calculator", () => {
    expect(calculator.add(1, 5)).toBe(6)  
    expect(calculator.add(1, -5)).toBe(-4)
    expect(calculator.subtract(10, 5)).toBe(5)
    expect(calculator.subtract(10, 20)).toBe(-10)
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(10, 0)).toBe(Infinity);
    expect(calculator.multiply(10, 0)).toBe(0);
    expect(calculator.multiply(10, -2)).toBe(-20);
})

test("caesarCipher", () => {
    expect(caesarCipher("hello, world", 7)).toBe("olssv, dvysk");
    expect(caesarCipher("ZebraS", 15)).toBe("OtqgpH")
    expect(caesarCipher("The Goose, and The Crazy Monkey!", 20)).toBe("Nby Aiimy, uhx Nby Wluts Giheys!");
})

test("analyzeArray", () => {
    const array = [1, 8, 3, 4, 2, 6]
    expect(analyzeArray(array).average).toBe(4);
    expect(analyzeArray(array).min).toBe(1);
    expect(analyzeArray(array).max).toBe(8);
    expect(analyzeArray(array).length).toBe(6);
})