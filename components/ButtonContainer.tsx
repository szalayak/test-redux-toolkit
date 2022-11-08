import React, { Children } from "react";

export const ButtonContainer = ({ children }: React.PropsWithChildren) => {
    return <div className={`grid gap-4 grid-cols-${Children.count(children)}`}>
        {children}
    </div>
}