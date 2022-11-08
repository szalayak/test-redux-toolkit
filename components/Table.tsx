import React from "react";

export const Table = ({ title, children }: React.PropsWithChildren & { title?: string }) => {
    return <table className="table-auto py-6 my-6 w-full">
        {title && <caption className="text-md font-bold">{title}</caption>}
        {children}
    </table>
}