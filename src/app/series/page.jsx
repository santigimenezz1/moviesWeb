import React from 'react'
import Loading from './loading'
import CarouselTarjetasPelicula from '@/components/CarouselTarjetasPelicula/CarouselTarjetasPelicula'
import { peticionSeriesEnElAire, peticionSeriesPopulares, peticionSeriesTendencia } from '../peticionesFetch/page'
import MapeoSectionSeries from '@/components/MapeoSectionSeries/MapeoSectionSeries'

async function Series() {
    
    const seriesPopulares = await peticionSeriesPopulares()
    const seriesTendencia = await peticionSeriesTendencia()
    const seriesEnElAire = await peticionSeriesEnElAire()
 return (
    <>
    <MapeoSectionSeries  seriesPopulares={seriesPopulares} seriesTendencia={seriesTendencia} seriesEnElAire={seriesEnElAire}/>
    </>
 )
}
export default Series
