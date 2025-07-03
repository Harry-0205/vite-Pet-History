import Info2 from "./info2"
import Carruserl from "./Carruserl"
import CarruVet from "./CarruVet"


function MainMi (){
    return(
        <div>
            <div className="BannerMi">
                <div className="Eslogan" >
                    <h5>
                    Cuidamos a tu mejor amigo como parte de nuestra familia.
                    </h5>
                </div>
            </div>
        <div className="AcomodacionMain">
            <div className="Infor1">
                <section>
                    <Carruserl></Carruserl>
                </section>
                <section>
                    <CarruVet></CarruVet>
                </section>
            </div>
            <div>
                <Info2> </Info2>
            </div>
        </div>
        </div>
    )
}

export default MainMi