import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <section>
            <h1>La tarea no existe</h1>
            <p>Vuelve a <Link to='/'>la lista de tareas</Link> y elije otra tarea.</p>
            <img src={`${process.env.PUBLIC_URL}/img/err404.jpg`} alt='Error 404' />
        </section>
    );
}
