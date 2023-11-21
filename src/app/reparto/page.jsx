import React from "react"
import '../reparto/reparto.css'
import TarjetaActor from "@/components/TarjetaActor/TarjetaActor"
const Reparto = ()=>{
    return (
        <div className="reparto">
            <div className="reparto__header">
                <img src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698713821/App%20peliculas/fC2HDm5t0kHl7mTm7jxMR31b7by_lzpiao.jpg"></img>
               <div className="reparto__info">
                <h1>Better call saul (2015)</h1>
                <h2>Volver</h2>
               </div>
            </div>
               <div className="reparto__tarjetas">
                <h1>Reparto de la serie (357)</h1>
                <div className="reparto__tarjetas__tarjeta">
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />
                    <TarjetaActor />



                </div>
               </div>
   
        </div>
    )
}
export default Reparto