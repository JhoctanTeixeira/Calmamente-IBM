import React from 'react'
import { faPencilAlt, faMouse, faGamepad, faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Exerciciomao() {
    return (
        <>
            <div className="fundo-mao">
                    <h1 className="escr-olho">Liste mentalmente 4 coisas que você consegue tocar.</h1>

                    <div class="col-12 row in-ce">
                        <div className="col-6">
                            <FontAwesomeIcon icon={faPencilAlt} className="laex" style={{marginBottom: '68%'}}/>
                        </div>

                        <div className="col-6">
                            <FontAwesomeIcon icon={faMouse} className="moex" />
                        </div>
                    </div>

                    <div className="col-12 row in-ce-se">
                        <div className="col-6">
                            <FontAwesomeIcon icon={faGamepad} className="coex" />
                        </div>

                        <div className="col-6">
                            <FontAwesomeIcon icon={faCouch} className="soex" />
                        </div>
                    </div>
            </div>

        </>
    )
}
