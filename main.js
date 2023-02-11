export const capitalize = (string) => {
    return string.split(" ").map(item => {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
};

export const reverseString = (string) => {
    return string.split("").reverse().join("");
}

export const calculator = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "divide": (a, b) => a / b,
    "multiply": (a, b) => a * b,
}

export const caesarCipher = (plaintext, key) => {
    let newString = "";

    for (const i of plaintext) {
        if (/[A-Z]/.test(i)) {
            newString += String.fromCharCode(((i.charCodeAt(0) - 65 + key) % 26) + 65);
        } else if (/[a-z]/.test(i)) {
            newString += String.fromCharCode(((i.charCodeAt(0) - 97  + key) % 26) + 97);
        } else {
            newString += i 
        }
    }

    return newString;
}

export const analyzeArray = (array) => {
    return {
        "average": array.reduce((a, b) => a + b) / array.length,
        "min": Math.min(...array),
        "max": Math.max(...array),
        "length": array.length
    };
}

