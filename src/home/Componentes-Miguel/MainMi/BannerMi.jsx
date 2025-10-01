function BannerMi ({titulo,subtitulo,text,children}){
    return(
        <div className="ma-ban">
            <h3 className="ma-ban-eslogan">{titulo}<br />{subtitulo} <br /></h3>
            <div className="ma-ban-text">
                <p><h5>{text}</h5></p>
                {children}
            </div>
        </div>
    )
}

export default BannerMi