import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import { Services } from "../components/Services"

export function Home() {
    return (
        <>
            <Header />
            <main>
                <Services />
            </main>
            <Footer />
        </>
    )
}