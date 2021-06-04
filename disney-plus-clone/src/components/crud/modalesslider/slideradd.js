import React, { useState } from "react";
import { Addslider } from "../../../servicios/index";

function Agregarslider(props) {
  const { closeModal } = props;

  const [form, setForm] = useState({
    img: "",
  });

  const changeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    await Addslider(form);
    closeModal(true);
  };

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="colg-lg-6">
          <div className="card text-center">
            <div className="card-body">
              <h3>Agregar</h3>

              <span className="badge badge-danger text-danger">
                TODOS LOS CAMPOS SON OBLIGATORIOS
              </span>
              <form className="mt-4" onSubmit={submit}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg mt-3"
                      placeholder="img"
                      value={form.img}
                      onChange={(event) => {
                        changeForm("img", event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    type="text"
                    className="btn btn-danger btn-lg mt-2 mx-3"
                    onClick={() => closeModal()}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg mt-2">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agregarslider;
