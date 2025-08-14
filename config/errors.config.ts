export interface ErrorsConfig {
    invalid: string;
    required: string;
}

export const formErrorMessages: Record<string, ErrorsConfig> = {
    email: {
        invalid: "Please enter a valid email address.",
        required: "Email address required.",
    },
    phone: {
        invalid: "Please enter a valid phone number.",
        required: "Phone required.",
    }
}