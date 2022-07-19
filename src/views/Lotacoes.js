import React, { useState, useEffect } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CButton,
  CCardBody,
  CDataTable,
  CButtonGroup,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import useApi from "../services/api";

export default function Lotacoes() {
  const api = useApi();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalTitleField, setModalTitleField] = useState("");
  const [modalIdField, setModalIdField] = useState("");
  const [modalLotacaoField, setModalLotacaoField] = useState("");
  const [modalDescricaoField, setModalDescricaoField] = useState("");
  const [modalEnderecoField, setModalEnderecoField] = useState("");
  const [modalCidadeField, setModalCidadeField] = useState("");
  const [modalQtd_maxField, setModalQtd_maxField] = useState("");
  const [modalId, setModalId] = useState("");
  const formatCurrency = (value) =>  {
//    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2})
  };

  const fields = [
    { label: "ID", key: "id", _style: { width: "80px" } },
    { label: "Lotacao", key: "lotacao", _style: { width: "80px" } },
    { label: "Descricao", key: "descricao", _style: { width: "300px" } },
    { label: "Endereço", key: "endereço", _style: { width: "80px" } },
    { label: "Cidade", key: "cidade",_style: { width: "80px" } },
    { label: "Qtd_max", key: "qtde_maxima_trabalhadores", _style: { width: "80px" } },
    { label: "Ações", key: "actions", _style:{width:"1px"}},
  ];

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setLoading(true);
    const result = await api.getLotacoes();
    setLoading(false);
    if (result.error === "") {
      setList(result.list);
    } else {
      setList(result.error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditButton = (id) => {
    let index = list.findIndex(v=>v.id===id);
    setModalId(list[index]["id"]);
    setModalTitleField(list[index]["title"]);
    setModalIdField(list[index]["id"]);
    setModalLotacaoField(list[index]["lotacao"]);
    setModalDescricaoField(list[index]["descricao"]);
    setModalEnderecoField(list[index]["enderecoField"]); 
    setModalCidadeField(list[index]["cidade"]);
    setModalQtd_maxField(list[index]["qtde_maxima_trabalhadores"]);
    setShowModal(true);
  };

  const handleRemoveButton = async (id) => {
    if (window.confirm("Confirma a exclusão?")) {
      const result = await api.removeWall(id);
      if (result.error === "") {
        getList();
      } else {
        alert(result.error);
      }
    }
  };

  const handleNewButton = () => {
    setModalId("");
    setModalTitleField("");

    setModalIdField("");
    setModalLotacaoField(""); 
    setModalDescricaoField("");
    setModalEnderecoField("");
    setModalCidadeField("");
    setModalQtd_maxField("");
    setShowModal(true);
  };

  const handleModalSave = async () => {
    if (modalTitleField && modalDescricaoField) {
      setModalLoading(true);
      let result;
      let data = {
        title: modalTitleField,
        id: modalIdField,
        lotacao: modalLotacaoField,
        descricao: modalDescricaoField,
        endereco: modalEnderecoField,
        cidade: modalCidadeField,
        qtde_maxima_trabalhadores: modalQtd_maxField,
      };

      if (modalId === "") {
        result = await api.addWall(data);
      } else {
        result = await api.updateWall(modalId, data);
      }

      setModalLoading(false);
      if (result.error === "") {
        setShowModal(false);
        getList();
      } else {
        alert(result.error);
      }
    } else {
      alert("Preencha os campos!");
    }
  };

  return (
    <>
      <CRow>
        <CCol>
          <h2>Cadastro de Lotações</h2>
          <CCard>
            <CCardHeader>
              <CButton color="primary" onClick={handleNewButton}>
                <CIcon name="cil-check" />
                Inclusão
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={list}
                fields={fields}
                loading={loading}
                noItemsViewSlot=" "
                hover
                striped
                bordered
                border
                clickableRows
                captionSlot={5}
                pagination
                itemsPerPage={10}
                scopedSlots={{
                  actions: (item) => (
                    <td>
                      <CButtonGroup>
                        <CButton
                          color="info"
                          onClick={() => handleEditButton(item.id)}                          
                        >
                          Alterar
                        </CButton>
                        <CButton
                          color="danger"
                          onClick={() => handleRemoveButton(item.id)}                          
                        >
                          Excluir
                        </CButton>
                      </CButtonGroup>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal show={showModal} onClose={handleCloseModal}>
        <CModalHeader closeButton>
          {modalId === "" ? "Novo" : "Alterar"} Lotação
        </CModalHeader>
        <CModalBody>
          <CFormGroup>
            <CLabel htmlFor="modal-title">Titulo da Lotação</CLabel>
            <CInput
              type="text"
              id="modal-title"
              placeholder="Digite a Descrição da Lotação"
              value={modalTitleField}
              onChange={(e) => setModalTitleField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-id">ID</CLabel>
            <CInput
              type="text"
              id="modal-id"
              placeholder="Digite o ID da Lotação"
              value={modalIdField}
              onChange={(e) => setModalIdField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-lotacao">Lotação</CLabel>
            <CInput
              type="text"
              id="modal-lotacao"
              placeholder="Digite a Lotação"
              value={modalLotacaoField}
              onChange={(e) => setModalLotacaoField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="modal-descricao">Descrição da Lotação</CLabel>
            <CTextarea
              id="modal-lotacao"
              placeholder="Digite a Descrição da Lotação"
              value={modalDescricaoField}
              onChange={(e) => setModalDescricaoField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-endereco">Endereço</CLabel>
            <CInput
              type="text"
              id="modal-endereco"
              value={modalEnderecoField}
              onChange={(e) => setModalEnderecoField(e.target.value)}
              disabled={modalLoading}
              width={"1px"}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-cidade">Cidade</CLabel>
            <CInput
              type="text"
              id="modal-cidade"
              value={modalCidadeField}
              onChange={(e) => setModalCidadeField(e.target.value)}
              disabled={modalLoading}
              width={"1px"}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-qtd_max">Qtd. Max</CLabel>
            <CInput
              type="text"
              id="modal-qtd_max"
              value={modalQtd_maxField}
              onChange={(e) => setModalQtd_maxField(e.target.value)}
              disabled={modalLoading}
              width={"1px"}
            />
          </CFormGroup>

        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={handleModalSave}
            disabled={modalLoading}
          >
            {modalLoading ? "Carregando..." : "Salvar"}
          </CButton>
          <CButton
            color="secondary"
            onClick={handleCloseModal}
            disabled={modalLoading}
          >
            {modalLoading ? "Carregando..." : "Cancelar"}
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}
