function MainInfo({titulo_1,subtitulo_1,texto_1,img_1,titulo_2,texto_2,img_2,children}) {
    return(
        <div>
            <div className="ma-cuerpo">
                <div>
                    <p>
                    <h3 className="ma-cuerpo-text">{titulo_1} <br />{subtitulo_1}</h3>
                    <h4 className="ma-cuerpo-info">{texto_1}</h4>
                    </p>
                </div>
                <div>
                    <img src={img_1} alt="" className="ma-cuerpo-img"/>
                </div>
            </div>
            <div className="ma-cuerpo" id="ma-cuerpo2">
                <div >
                    <img src={img_2} alt="" className="ma-cuerpo-img" id="ma-cuerpo-img2"/>
                </div>
                <div className="ma-cuerpo-text-aling">
                    <p>
                    <h3 className="ma-cuerpo-text">{titulo_2}<br /></h3>
                    <h4 className="ma-cuerpo-info">{texto_2}</h4>
                    </p>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainInfo