import {useState} from "react"


function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  const [curtida , setCurtida] = useState(false);
  const [numeroCuritida , setNumeroCurtida] = useState(0);
  const [comentando , setComentando] = useState(false);
  const [numeroComentarios , setNumeroComentarios] = useState(0);
  const [comentarios , setComentarios] = useState([]);
  const [imputValue , setImputValue] = useState("");

  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
    if(curtida) {
      setCurtida(!curtida)
      setNumeroCurtida(numeroCuritida-1)
    }else {
      setCurtida(!curtida)
      setNumeroCurtida(numeroCuritida+1)
    }
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
    setComentando(!comentando)
  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
    setImputValue(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    const listarComentarios = [...comentarios, comentario]
    setComentarios(listarComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios +1)
    setImputValue("")

  };

  {/* Passo6 */}
  const caixaDeComentario = comentando ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={""}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={enviarComentario}>Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>Nome do usuário aqui</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span >Número de curtidas: 0</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida}>
            {/* Passo6 */}
            {numeroCuritida ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;