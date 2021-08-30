import MENU from '../components/menu'
import FOOTER from '../components/footer'
import Image from 'next/image'
import IMAGES from '../images/hamburguer_de_frango.jpg'

function Receitas(){
    return (
        <>
            <MENU />
           
                <h1>My Homepage</h1>
                <Image src={Image} alt="Picture of the author" />
                <p>Welcome to my homepage!</p>
            
            <div>RECEITAS</div>
            <FOOTER />
        </>
    )
}


export default Receitas