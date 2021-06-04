import React, { useState } from "react";
import { eliminarmovie } from "../../../servicios/index";

export default function Deletemovie({
  id_movie
}) {
  const [isModal, setIsModal] = useState(false);

  //const { CloseModalUpdate } = props;

  const [form, setForm] = useState({
    id_movie: id_movie
  });

  const submit = async (event) => {
    event.preventDefault();
    if (form.id_movie === 200) {
      const res = await eliminarmovie(form);
      window.confirm("oh no metelo bien!!");

      //    CloseModalUpdate(true);
    } else {
      const res = await eliminarmovie(form.id_movie);
      window.confirm("Elinimado correctamente!!");
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
            <p className="modal-card-title">eliminar la peli</p>
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
            </section>

            <footer className="modal-card-foot">
              <button onClick={isModal} className="button">
                Cancel
              </button>
              <button type="submit" onClick={setIsModal} className="button">
                eliminar
              </button>
            </footer>
          </form>
        </div>
      </div>

      <button
        onClick={() => setIsModal("is-active")}
        className="button is-small is-danger"
      >
        eliminar
      </button>
    </div>
  );
}
