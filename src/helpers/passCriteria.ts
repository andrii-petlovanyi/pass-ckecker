interface ICriteria {
    pattern: RegExp;
    message: string;
}

export const passCriteria: ICriteria[] = [
    {
        pattern: /^.{0,7}$/,
        message: "weak",
    },
    {
        pattern: /^[a-zA-Z]+$/,
        message: "easy",
    },
    {
        pattern: /^\d+$/,
        message: "easy",
    },
    {
        pattern: /^[!@#$%^&*]+$/,
        message: "easy",
    },
    {
        pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
        message: "strong",
    },
    {
        pattern: /(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[!@#$%^&*])|(?=.*\d)(?=.*[!@#$%^&*])/,
        message: "medium",
    },
];