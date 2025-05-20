
export default function layout({children} : {children: React.ReactNode}){
    return(
        <main>
            <nav>Navegacion por categorias</nav>
            {children}
        </main>
    );
}