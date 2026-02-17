import Header from "../components/header";
import ASCIIText from '../components/ASCIIText';

function Home() {
    return (
        <>
            
            <h1>Home Page</h1>
                

            <ASCIIText
            text='hello_world'
            enableWaves
            asciiFontSize={8}
            text="Hey!"
            />
        </>
    )
}
export default Home;