

import Form from '../Component/Form';
import Footer from '../Component/Footer';

export default function Contact()
{

  return (
    <>

    <h1 style={{textAlign:'center',color:'rgba(68, 181, 141, 1)', marginTop:'30px', marginBottom:'30px', fontWeight:600}}> Contact US </h1>

   <div>   <iframe
            title="Google Map"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Block+-+C+-275%2C+First+Floor%2C+Sector+10%2C+Noida+Gautam+Buddha+Nagar%2C+India+201301&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            style={{ border: '0' }}
            aria-hidden="false"
            tabIndex="0"
        ></iframe>
        </div>
    <div>

    <Form></Form>
    <Footer></Footer>

    </div>

    </>

  )

}