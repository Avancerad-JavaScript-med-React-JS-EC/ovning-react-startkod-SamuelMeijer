// MÅSTEA ALLTID IMPORTERAS FÖR ATT ARBETA MED REACT
import React from 'react';
import ReactDOM from 'react-dom';
// Modules
import Name from './Name.js';

// !!!! Det går inte att använda två argument bredvid varandra som första argument !!!!
/* 
FUNKAR EJ!! BARA <p>-elementet renderas
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));
ReactDOM.render(<p>Hejsvej test</p>, document.getElementById('root'));

FUNKAR:
ReactDOM.render(<section><h1>Hello World!</h1><p>Hejsvej test</p></section>, document.getElementById('root'));
*/

/* !!!! Två typer av komponenter: Funktionella och Klassbaserade !!!! */
// FUNKTIONELL-KOMPONENT
function App () {
    const hellowWord = 'world!';

    return (
        <section className="wrapper">
            <h1>Hello { hellowWord }</h1>
            <Name />
        </section>
    );
};

// Render to DOM
ReactDOM.render(<App />, document.getElementById('root'));