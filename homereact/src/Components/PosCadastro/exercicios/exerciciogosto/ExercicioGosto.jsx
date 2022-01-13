import React from 'react'
import Donut from '../../../img/donut.png'
import Cereja from '../../../img/cereja.png'
import Sorvete from '../../../img/sorvete.png'

export default function ExercicioGosto() {
    return (
        <>

        <body className="fundoOl" style={{marginBottom: '8%'}}>

            <h1 className="escr-olho">Pra terminar, procure em volta de você 1 coisa que tem gosto.</h1>

            <div className="margi-to-sabor ">
                <div className="col-12 row">
                    <div className="col-6 ">
                        <div className="topo" ></div>
                        <div className="base"></div>
                    </div>
                    <div className="col-6">
                        <img src={Donut} className=" im-donut " alt=""/>
                        <img src={Cereja} className="im-cereja" alt=""/>
                        <img src={Sorvete} className ="im-sorvete" alt=""/>
                    </div>
                </div>
            </div>


            {/* <script>
            </script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous">
            </script> */}
        </body>

            
    </>
    )
}
