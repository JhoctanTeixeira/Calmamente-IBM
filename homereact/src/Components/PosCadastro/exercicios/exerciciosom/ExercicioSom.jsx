import React from 'react'
import ImgSomFone from '../../../img/img-som-fone.gif'

export default function ExercicioSom() {
    return (
        <>
            <body className="fundoOl ">
                <h1 className="escr-olho">Liste mentalmente 3 sons que você consegue ouvir.</h1>
                <div style={{height: 'auto'}} >
                    <img src={ImgSomFone} style={{width: '86%', marginLeft: '8%'}} alt=""/>
                </div>
                {/* 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous">
    </script> */}
            </body>

        </>
    )
}
