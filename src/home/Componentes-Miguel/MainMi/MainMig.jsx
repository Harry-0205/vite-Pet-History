import Sec1 from "./Sec1"
import Sec2 from "./Sec2"
import Sec3 from "./Sec3"
import perros from '../../../assets/perros.jpg'

function MainMig(){
    return(
        <>
        <div className="GridM">
            <div className="bannerr">
                <div className="slogan">
                    <h5>
                    Cuidamos a tu mejor amigo como parte de nuestra familia.
                    </h5>
                </div>
            </div>
            <div  >
                <Sec1  >
                </Sec1>
            </div>
            <div>
                <Sec2 >

                </Sec2>
            </div>
            <div className='div3' >
                <Sec3 >
                    
                </Sec3>
            </div>
        </div>
        </>
    )
}
export default MainMig