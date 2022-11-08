import { Header } from "./Header";

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <div>
            <Header />
            <main className="container mx-auto py-6">{children}</main>
        </div>
    )
}