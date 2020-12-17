// MÅSTEA ALLTID IMPORTERAS FÖR ATT ARBETA MED REACT
import React from 'react';
import ReactDOM from 'react-dom';

// !!!! Det går inte att använda två argument bredvid varandra som första argument !!!!
/* FUNKAR EJ!! BARA <p>-elementet renderas
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));
ReactDOM.render(<p>Hejsvej test</p>, document.getElementById('root'));
*/
ReactDOM.render(<section><h1>Hello World!</h1><p>Hejsvej test</p></section>, document.getElementById('root'));


/* !!!! Två typer av komponenter: Funktionella och Klassbaserade !!!! */