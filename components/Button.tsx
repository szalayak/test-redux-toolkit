import React from "react"

export const Button = ({ children, variant, full, rounded, ...buttonProps }: React.PropsWithChildren & JSX.IntrinsicElements["button"] & { variant?: "normal" | "positive" | "negative", full?: boolean, rounded?: boolean }) => {

    const getButtonColours = (variant?: string) => {
        switch (variant) {
            case "positive":
                return ["bg-blue-700", "hover:bg-blue-500"];
            case "negative":
                return ["bg-red-700", "hover:bg-red-500"];
            default:
                return ["bg-emerald-700", "hover:bg-emerald-500"];
        }
    }

    return <button className={`${rounded ? "rounded-full" : "rounded-none"} h-fit shadow-md text-white py-2 px-4 ${getButtonColours(variant).join(" ")} ${full && "w-full"}`} {...buttonProps}>{children}</button>
}