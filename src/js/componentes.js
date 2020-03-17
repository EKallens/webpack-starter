import '../css/componentes.css';

export const mostrarMensaje = (  ) => {
    const h1 = document.createElement('h1');
    h1.innerText = `Webpack starter`;
    document.body.append(h1);
}