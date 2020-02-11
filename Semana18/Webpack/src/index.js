import {mostrarSaludo} from './alertas';
// import './estilos.css';
import './estilos.scss';
import $ from 'jquery';
import uuid from 'uuid/v4';

document.getElementById('click-btn').addEventListener('click', mostrarSaludo);
$('#click-btn-jquery').click(
    ()=>(alert(`Me hiciste click con tu jquery y tu id es ${uuid()}`)));