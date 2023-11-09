import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <div className="Empty-Container">
      <h2 className="Empty-title">¡Crea tu primer ToDo!</h2>
      <figure className="Empty-ImgContainer">
        <img
          alt="a person working background image"
          src="https://d11cuk1a0j5b57.cloudfront.net/blog/wp-content/uploads/2020/04/Trabajar-desde-casa-portada.jpg"
        />
      </figure>
    </div>
  );
}

export { EmptyTodos };
