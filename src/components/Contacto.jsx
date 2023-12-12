import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {

    }

    return (
        <div className='container'>
            <h1 className='main-title'>Contacto</h1>

            <form className='formulario' onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu Nombre" {...register("nombre")} />

                <input type="email" placeholder="Ingresá tu Email" {...register("email")} />

                <input type="phone" placeholder="Ingresá un Telefono de Contacto" {...register("telefono")} />

                <button className='enviar' type="submit"> Enviar </button>

            </form>
        </div>
    )
}

export default Contacto