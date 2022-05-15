import { Footer } from "./Footer"
import { Header } from "./Header"
import NextNProgress from "nextjs-progressbar";

export const Layout = ({children}) => {
    return (
    <div>
        <Header />
        <main className="main">
            <NextNProgress
                color="red"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            {children}
        </main>
        <Footer />
        </div>
    )
}