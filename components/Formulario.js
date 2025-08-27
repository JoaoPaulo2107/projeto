function Formulario() {

        function CadastrarUsuario(e){
            e.preventDefault()
            console.log('Cadastrou o usuário')
        }
        
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>
                <div>
                    <input type = "submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Formulario