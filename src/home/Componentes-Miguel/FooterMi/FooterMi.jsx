import logo from "../../../assets/imagenes/logo.png"

function FooterMi (){
    return(
        <div className="foot">
            <div className="he-comp">
            <div>
                <div className='he-comp-grid1'><img src={logo} alt="" id="foo-log"  /></div>
            </div>
            <div >
                <p >
                    <h6 className="foo-line-height">📞 Teléfono <br /> ✉️ contacto@tucorreo.com <br /> Síguenos en: <br /> [Facebook] 
                    <br /> [Instagram]<br /> [Twitter]<br /> [LinkedIn] </h6>
                </p>
            </div>
            <div >
                <h6 className="foo-line-height">Política de privacidad <br /> Términos y condiciones</h6> 
            </div>
            </div>
        </div>
    )
}

export default FooterMi