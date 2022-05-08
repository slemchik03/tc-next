import { Footer } from "./Footer"
import { Header } from "./Header"


export const Layout = ({children}) => {
    return (
    <div>
        <Header />
        <main className="main">
            {children}
        </main>
        <Footer />
        </div>
    )
}