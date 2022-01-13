import React from 'react'
import ventoCheiro from '../../../img/vento-cheiro.png'
import florCheiro from '../../../img/flor-cheiro.png'
import cheiroFlor from '../../../img/cheiro-flor.png'
import narizCheiro from '../../../img/nariz-cheiro.png'

export default function ExercicioCheiro() {
    return (
        <>
            <div className="fundoOl">
                <h1 className="escr-olho">Liste mentalmente 2 coisas que possuem cheiro.</h1>
                <div className="d-flex justify-content-center" style={{flexDirection: 'column'}}>
                    <div className="d-flex justify-content-center" >
                        <img src={narizCheiro} style={{width:'24%'}} alt="" />
                    </div>
                    <div>
                        <div className="ar-cheiro d-flex justify-content-center">
                            <img src={ventoCheiro} style={{width:'8%'}} alt="" />
                            <img src={ventoCheiro} style={{width:'8%'}} alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mrgt-media"  style={{}}>
                        <img src={florCheiro} style={{width: '10%', marginRight: '2%'}} alt=""/>
                        <img src={cheiroFlor} style={{width: '10%'}} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}
