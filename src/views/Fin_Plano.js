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

export default function Pagar_Receber() {
  const api = useApi();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalTitleField, setModalTitleField] = useState("");
  const [modalConta_idField, setModalConta_idField] = useState("");
  const [modalDescricaoField, setModalDescricaoField] = useState("");
  const [modalTipoField, setModalTipoField] = useState("");
  const [modalNaturezaField, setModalNaturezaField] = useState("");
  const [modalConta_DebField, setModalConta_DebField] = useState("");
  const [modalConta_CredField, setModalConta_CredField] = useState("");
  const [modalContabilizaField, setModalContabilizaField] = useState("");
  const [modalId, setModalId] = useState("");
  const formatCurrency = (value) =>  {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2})
  };

  const fields = [
    { label: "Conta_id", key: "id", _style: { width: "10px" } },
    { label: "Descrição", key: "descricao", _style: { width: "10px" } },
    { label: "Tipo", key: "tipo", _style: { width: "10px" } },
    { label: "Natureza", key: "natureza", _style: { width: "80px" } },
    { label: "Conta Deb.", key: "conta_deb", _style: { width: "80px" } },
    { label: "Conta Cred.", key: "pessoa_cred", _style: { width: "80px" } },
    { label: "Contabiliza", key: "contabiliza", _style: { width: "80px" } },
    { label: "Ações", key: "actions", _style:{width:"1px"}},
  ];

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setLoading(true);
    const result = await api.getFin_Plano();
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
    setModalConta_idField(list[index]["conta_id"]);
    setModalDescricaoField(list[index]["data_pagto"]);
    setModalTipoField(list[index]["tipoField"]); 
    setModalDescricaoField(list[index]["descricao_id"]);
    setModalConta_DebField(list[index]["conta_deb"]);
    setModalConta_CredField(list[index]["conta_cred"]);
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

    setModalConta_idField(""); 
    setModalDescricaoField("");
    setModalTipoField("");
    setModalNaturezaField("");
    setModalConta_DebField("");
    setModalConta_CredField("");
    setModalContabilizaField("");
    setShowModal(true);
  };

  const handleModalSave = async () => {
    if (modalTitleField && modalDescricaoField) {
      setModalLoading(true);
      let result;
      let data = {
        title: modalTitleField,
        conta_id: modalConta_idField,
        descricao: modalDescricaoField,
        tipo: modalTipoField,
        natureza: modalNaturezaField,
        conta_deb: modalConta_DebField,
        conta_cred: modalConta_CredField,
        contabiliza: modalContabilizaField,
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
          <h2>Plano de Contas</h2>
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
          {modalId === "" ? "Novo" : "Alterar"} - Plano de Contas
        </CModalHeader>
        <CModalBody>
          <CFormGroup>
            <CLabel htmlFor="modal-title">Conta</CLabel>
            <CInput
              type="text"
              id="modal-conta_id"
              placeholder="Digite o código da Conta"
              value={modalConta_idField}
              onChange={(e) => setModalConta_idField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="modal-descricao_id">Descrição</CLabel>
            <CInput
              type="text"
              id="modal-descricao_id"
              placeholder="Informe a Descrição da Conta"
              value={modalDescricaoField}
              onChange={(e) => setModalDescricaoField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="modal-tipo">Tipo</CLabel>
            <CTextarea
              id="modal-tipo"
              placeholder="Informe o Tipo de Conta"
              value={modalTipoField}
              onChange={(e) => setModalTipoField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-natureza">Natureza</CLabel>
            <CInput
              type="text"
              id="modal-natureza"
              value={modalNaturezaField}
              onChange={(e) => setModalNaturezaField(e.target.value)}
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
