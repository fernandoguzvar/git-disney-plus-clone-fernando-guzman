import React, { useState } from "react";
import { Updateslider } from "../../../servicios/index";

export default function Updatesli({ id_slider, img }) {
  const [isModal, setIsModal] = useState(false);

  //const { CloseModalUpdate } = props;

  const [form, setForm] = useState({
    id_slider: id_slider,
    img: img,
  });

  const submit = async (event) => {
    event.preventDefault();
    if (form.id_slider === form.id_slider) {
      const res = await Updateslider(form);
      //    CloseModalUpdate(true);
    } else {
      const res = await Updateslider(form);
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
              <br></br>
              <input
                type="text"
                name="id_slider"
                className="input is-focused-danger "
                placeholder="id_slider"
                value={form.id_slider}
                onChange={handleChange}
                readOnly
              />
              <br></br>
              <label>img</label>
              <br></br>

              <input
                type="text"
                className="input is-focused"
                placeholder="img"
                name="img"
                value={form.img}
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
