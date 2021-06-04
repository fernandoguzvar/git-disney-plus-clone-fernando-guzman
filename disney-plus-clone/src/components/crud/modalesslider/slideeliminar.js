import React, { useState } from "react";
import { eliminarslider } from "../../../servicios/index";

export default function Deleteslider({
  id_slider
}) {
  const [isModal, setIsModal] = useState(false);

  //const { CloseModalUpdate } = props;

  const [form, setForm] = useState({
    id_slider: id_slider
  });

  const submit = async (event) => {
    event.preventDefault();
    if (form.id_slider === 200) {
      const res = await eliminarslider(form);
      window.confirm("oh no metelo bien!!");

      //    CloseModalUpdate(true);
    } else {
      const res = await eliminarslider(form.id_slider);
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
            <p className="modal-card-title">eliminar slider</p>
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
                name="id_slider"
                className="input is-focused-danger "
                placeholder="id_slider"
                value={form.id_slider}
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
