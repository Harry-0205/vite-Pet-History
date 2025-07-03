import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Logo from '../../../assets/pet.png'
function Sec2(){
    return(
        <>
             <div>
                <section className="QS">  
                    <button className="qs1"><BsArrowLeft /></button>
                    <article className="qs2" id="qs2-2">
                        <div> 
                            <h3>aliados</h3>
                        </div>
                        <div className="bodes">
                            <img src= {Logo} alt="" id='tamaño'/>
                            <h6> 
                                Veterinaria <br /> celestine <br />
                                <i>
                                Cuidamos su salud en un espacio pensado para su bienestar.
                                </i>
                            </h6>
                        </div>
                    </article>
                    <button className="qs1"><BsArrowRight /></button>
                </section>
            </div>
        </>
    )
}
export default Sec2