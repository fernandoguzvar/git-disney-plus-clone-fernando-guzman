import React, { useState, useEffect } from "react";
import { getviewers } from "../../servicios/index";
import { Box, Table, Container, Columns,Modal } from "react-bulma-components";
import Agregarviewers from "../crud/modalesviewers/viewersadd";
import Updatevi from "../crud/modalesviewers/viewersmodi";
import Deleteviewers from "../crud/modalesviewers/viewerseliminar";



const CrudAdmin = () => {
  const [modal, setModal] = useState(false);
  const [crudviewers, setviewers] = useState([]);

  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = (result) => {
    if (result) {
      loadCrudviewers();
    }
    setModal(false);
  };

  async function loadCrudviewers() {
    const response = await getviewers();
    console.log(response);

    if (response.status === 200) {
      setviewers(response.data.viewers);
    }
  }

  useEffect(() => {
    loadCrudviewers();
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
                  <th style={{ border: '1px solid'}}>id_viewers</th>
                  <th style={{ border: '1px solid'}}>img</th>
                  <th style={{ border: '1px solid'}}>video</th>
                  <th style={{ border: '1px solid'}}>modificar</th>
                  <th style={{ border: '1px solid'}}>eliminar</th>
                </tr>
              </thead>
              <tbody>
                {crudviewers.map((item) => (
                  <tr style={{ border: '1px solid'}}>
                    <th style={{ border: '1px solid'}} >{item.id_viewers}</th>
                    <td style={{ border: '1px solid'}}>{item.img}</td>
                    <td style={{ border: '1px solid'}}>{item.video}</td>

                    <td style={{ border: '1px solid'}}>
                      <Updatevi
                        id_viewers={item.id_viewers}
                        img={item.img}
                        video={item.video}
                      />
                    </td>
                    <td style={{ border: '1px solid'}}><Deleteviewers
                        id_viewers={item.id_viewers}
                    /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal show={modal} onClose={CloseModal}>
              <Modal.Content>
                <Agregarviewers closeModal={CloseModal} />
              </Modal.Content>
            </Modal>
          </Box>
        </Columns>
      </Container>
    </div>
  );
};

export default CrudAdmin;

