import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { FooterComp } from '../component/footer/FooterComp.jsx';
import { ContactComp } from '../component/contact/ContactComp.jsx';
import { Container } from 'react-bootstrap';
import { ProductList } from '../component/product/ProductList.jsx';

export const Home = () => {
    return(
        <>
        <Container fluid className='g-0'>
            <CarouselComp />
            <div className='container'>
                <ProductList />
            </div>
        </Container>
        <ContactComp />
        <FooterComp />
        </>
    )
}   