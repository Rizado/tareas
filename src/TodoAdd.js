import { useState } from 'react';
import { useSubmit } from 'react-router-dom';

export default function TodoAdd() {
    const submit = useSubmit();

    const [title, setTitle] = useState('');
    const [desc, setSDesc] = useState('');
    const [image, setImage] = useState('');

    const handleImageChange = evt => {
        const cFiles = evt.target.files;
        if (cFiles.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        } else 
            setImage('');
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();
        submit({title, desc, image}, {action: '/add', method: 'post'});
    };

    const handleFormReset = () => {
        setTitle('');
        setSDesc('');
        setImage('');
    };

    return(
        <section>
            <h1>Creación de la tarea nueva</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Título</label>
                    <div className="control">
                        <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Comentario</label>
                    <div className="control">
                        <textarea className="textarea" value={desc} onChange={e => setSDesc(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input className="file-input" type="file" accept="image/*" onChange={handleImageChange} />
                            <span className="file-cta">
                                <span className="file-label">
                                    Imagen
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input type="reset" className="button is-warning is-light" value="Borrar" />
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-primary" value="Crear" />
                    </div>
                </div>
            </form>
        </section>
    );
};