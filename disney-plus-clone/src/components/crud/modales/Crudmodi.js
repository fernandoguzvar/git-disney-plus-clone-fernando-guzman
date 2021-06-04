import React, { useState } from "react";
import { UpdateMovie } from "../../../servicios/index";

export default function UpdateMo({
  id_movie,
  cardImg,
  backgroundImg,
  titleImg,
  subTitle,
  description,
  title,
}) {
  const [isModal, setIsModal] = useState(false);

  //const { CloseModalUpdate } = props;

  const [form, setForm] = useState({
    id_movie: id_movie,
    cardImg: cardImg,
    backgroundImg: backgroundImg,
    titleImg: titleImg,
    subTitle: subTitle,
    description: description,
    title: title,
  });

  const submit = async (event) => {
    event.preventDefault();
    if (form.id_movie === form.id_movie) {
      const res = await UpdateMovie(form);
      //    CloseModalUpdate(true);
    } else {
      const res = await UpdateMovie(form);
      window.confirm("modificado correctamente!!");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <div className={`modal ${isModal}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modificar el usuario</p>
            <button
              onClick={setIsModal}
              className="delete"
              aria-label="close"
            />
          </header>
          <form onSubmit={submit}>
            <section className="modal-card-body">
              <label>ID</label>
              <input
                type="text"
                name="id_movie"
                className="input is-focused-danger "
                placeholder="id_movie"
                value={form.id_movie}
                onChange={handleChange}
                readOnly
              />
              <label>cardImg</label>

              <input
                type="text"
                className="input is-focused"
                placeholder="cardImg"
                name="cardImg"
                value={form.cardImg}
                onChange={handleChange}
              />

              <label>backgroundImg</label>

              <input
                type="text"
                className="input is-focused"
                placeholder="backgroundImg"
                name="backgroundImg"
                value={form.backgroundImg}
                onChange={handleChange}
              />

              <label>titleImg</label>
              <input
                type="text"
                className="input is-focused"
                placeholder="titleImg"
                name="titleImg"
                value={form.titleImg}
                onChange={handleChange}
              />

              <label>subTitle</label>
              <input
                type="text"
                className="input is-focused"
                placeholder="subTitle"
                name="subTitle"
                value={form.subTitle}
                onChange={handleChange}
              />

              <label>description</label>

              <input
                type="text"
                className="input is-focused"
                placeholder="description"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
              <label>title</label>
              <input
                type="text"
                class="textarea"
                rows="10"
                placeholder="title"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </section>

            <footer className="modal-card-foot">
              <button onClick={isModal} className="button">
                Cancel
              </button>
              <button type="submit" onClick={setIsModal} className="button">
                Insertar
              </button>
            </footer>
          </form>
        </div>
      </div>

      <button
        onClick={() => setIsModal("is-active")}
        className="button is-small is-info"
      >
        Modificar
      </button>
    </div>
  );
}
