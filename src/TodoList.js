import { useLoaderData, Link, useSubmit } from 'react-router-dom';

export default function TodoList() {
    const list = useLoaderData();
    const submit = useSubmit();

    const handleDoneClick = key => {
        submit(null, {action: `/${key}`, method: 'patch'})
    }

    const handleDeleteClick = key => {
        submit(null, {action: `/${key}`, method: 'delete'})
    }

    return(
        <section>
            <h1>Tareas</h1>
            <table className="table is-hoverable is-fullwidth is-striped" id="tarealista">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th width='10%'>Marcar hecha</th>
                        <th width='10%'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <tr key={item.key}>
                            <td>
                                <Link to={`/${item.key}`} >
                                    {item.done && <del>{item.title}</del>}
                                    {!item.done && item.title}
                                </Link>
                            </td>
                            <td width='10%' align='center'>
                                <button className="button is-success" title="Hecho" disabled={item.done} onClick={() => {handleDoneClick(item.key)}}>&#9745;</button>
                            </td>
                            <td width='10%' align='center'>
                                <button className="button is-danger" title="Eliminar" onClick={() => {handleDeleteClick(item.key)}}>&#9746;</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}