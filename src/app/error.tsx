"use client"
import Image from 'next/image';
import style from '../sass/global-error.module.sass';

export default function GlobalError({reset}: ErrorPagesProps){
    return(
        <main>
            <h1>Ha ocurrido un error</h1>
            <Image 
                src='/images/error.png'
                width={500}
                height={500}
                alt='Error'
            />

            <p className='Error__message'>Al parecer ha ocurrido un error</p>

            <button  onClick={reset} className='Error__button'>Volver a intentar</button>
        </main>
    )

}