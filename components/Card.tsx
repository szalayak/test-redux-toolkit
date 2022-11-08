import { PropsWithChildren } from "react"

export const Card = ({ title, full, children }: PropsWithChildren & { title: string, full?: boolean }) => {

    return <div className={`border border-emerald-700 rounded-md drop-shadow-lg p-6 h-fit ${full && "w-full"}`}>
        <header className="pb-6">
            <h1 className="font-bold text-lg">{title}</h1>
        </header>
        <main>
            {children}
        </main>
    </div>

}