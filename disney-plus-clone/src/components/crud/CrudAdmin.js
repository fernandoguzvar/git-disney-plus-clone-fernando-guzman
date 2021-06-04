import React, { useState, useEffect } from "react";
import { getMovie } from "../../servicios/index";
import { Box, Table, Container, Columns,Modal } from "react-bulma-components";
import AgregarCrud from "../crud/modales/Crudadd";
import UpdateMo from "../crud/modales/Crudmodi";
import Deletemovie from "../crud/modales/Crudeli";


/* import UpdateUser from "./Modalesusuarios/Usuariomodificar";
import AgregarUse from "./Modalesusuarios/Usuarioagregar";
import DeleteUser from "./Modalesusuarios/Usuarioeliminar"; */

const CrudAdmin = () => {
  const [modal, setModal] = useState(false);
  const [crud, setUsua] = useState([]);

  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = (result) => {
    if (result) {
      loadCrud();
    }
    setModal(false);
  };

  async function loadCrud() {
    const response = await getMovie();
    console.log(response);

    if (response.status === 200) {
      setUsua(response.data.movie);
    }
  }

  useEffect(() => {
    loadCrud();
  }, []);

  return (
    <div>
      <Container style={{textAlign: 'center'}}  >
        <Columns>
          <Box>
            <button
              onClick={OpenModal}
              className="btn btn-success btn-lg m-auto w-100"
            >
              Agregar
            </button>

            <Table  style={{ border: '1px solid', textAlign: 'justify'}} size="default">
              <thead>
                <tr>
                  <th style={{ border: '1px solid'}}>id_movie</th>
                  <th style={{ border: '1px solid'}}>cardImg</th>
                  <th style={{ border: '1px solid'}}>backgroundImg</th>
                  <th style={{ border: '1px solid'}}>titleImg</th>
                  <th style={{ border: '1px solid'}}>subTitle</th>
                  <th style={{ border: '1px solid'}}>description</th>
                  <th style={{ border: '1px solid'}}>title</th>
                  <th style={{ border: '1px solid'}}>modificar</th>
                  <th style={{ border: '1px solid'}}>eliminar</th>
                </tr>
              </thead>
              <tbody>
                {crud.map((item) => (
                  <tr style={{ border: '1px solid'}}>
                    <th style={{ border: '1px solid'}} >{item.id_movie}</th>
                    <td style={{ border: '1px solid'}}>{item.backgroundImg}</td>
                    <td style={{ border: '1px solid'}}>{item.cardImg}</td>
                    <td style={{ border: '1px solid'}}>{item.titleImg}</td>
                    <td style={{ border: '1px solid'}}>{item.subTitle}</td>
                    <td style={{ border: '1px solid'}}>{item.description}</td>
                    <td style={{ border: '1px solid'}}>{item.title}</td>
                    <td>
                      <UpdateMo
                        id_movie={item.id_movie}
                        cardImg={item.cardImg}
                        backgroundImg={item.backgroundImg}
                        titleImg={item.titleImg}
                        subTitle={item.subTitle}
                        description={item.description}
                        title={item.title}
                      />
                    </td>
                    <td><Deletemovie
                        id_movie={item.id_movie}
                    /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal show={modal} onClose={CloseModal}>
              <Modal.Content>
                <AgregarCrud closeModal={CloseModal} />
              </Modal.Content>
            </Modal>
          </Box>
        </Columns>
      </Container>
    </div>
  );
};

export default CrudAdmin;

