import './CardSlider.modular.scss'
import Scan from './scan'
const CardSlider = () => {
    return (
        <section className='section section-faqs w-full lg:h-[2100px] h-[500vw]'>
            <strong className="absolute lg:left-20 lg:top-5 top-0 mt-5 text-center mb-5 text-lime-950 text-2xl font-extrabold font-cabinet lg:text-5xl lg:leading-[60px] tracking-wide">
            Answers to most Asked Questions
            </strong>
            {/* <div className='container'> */}
            <div className="faqs" >
                <div className="faqs__faq">
                    <h5 className="h5">What is Farmiz?</h5>
                    <p className="faqs__faq-info p">
                        Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentication technologies.
                    </p>
                </div>
                <div className="faqs__faq" style={{ transform: "translate(0px, 106px)" }}>
                    <h5 className="h5">Which country can I invest from?</h5>
                    <div className="faqs__faq-info">
                        <p className="p">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</p>
                    </div>
                </div>
                <div className="faqs__faq" style={{ transform: "translate(0px, 212px)" }}>
                    <h5 className="h5">How do I invest with Farmiz?</h5>
                    <p className="faqs__faq-info p">
                        Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.
                    </p>
                </div>
                <div className="faqs__faq" style={{ transform: "translate(0px, 318px)" }}>
                    <h5 className="h5"> Why should I use Farmiz?</h5>
                    <p className="faqs__faq-info p">
                    Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.
                    </p>
                </div>
                <div className="faqs__faq" style={{ transform: "translate(0px, 424px)" }}>
                    <h5 className="h5">Do I need the app to use these features?</h5>
                    <div className="faqs__faq-info">
                        <p className="p">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</p>
                    </div>
                </div>
            </div>
          <Scan/>
        </section>
    )
}

export default CardSlider


