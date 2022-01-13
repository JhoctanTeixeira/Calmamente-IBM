import React from 'react'

// class ExercicioVisao extends React.Component 
export default function ExercicioVisao() {

    


    // _onMouseMove = (e) => {
    //     const width = this.refs.eyes.clientWidth;
    //     const heigth = this.refs.eyes.clientHeigth;
    //     const oX = (e.nativeEvent.oofsetX / width) * 100;
    //     const oY = (e.nativeEvent.oofsetX / heigth) * 100;
    //     // console.log(Math.floor(oX), Math.floor(oY));

    //     this.setState({
    //         x: oX,
    //         y: oY
    //     });

    // }
    // render() {
    //     const { x, y } = this.state;
    //     const maskStyle = {
    //         '--maskX': x,
    //         '--maskY': y
    //     }

        return (
            <>
                <div className="fundoOl" style={{marginBottom: '42%'}}>
                    <h1 className="escr-olho">Observe o ambiente a sua volta.
                        Liste mentalmente 5 coisas que você consegue enxergar.</h1>
                    <div className="eyes" /*onMouseMove={this._onMouseMove} ref="eyes" /*style={maskStyle}*/>
                        <div className="eye">
                            <div className="ball"></div>
                        </div>
                        <div className="eye" >
                        <div className="ball" ></div>
                    </div>
                </div>
            </div>

            </>
        )
    // }

}
// export default ExercicioVisao;