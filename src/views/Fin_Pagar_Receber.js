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
  const [modalLancamentoField, setModalLancamentoField] = useState("");
  const [modalDataPagtoField, setModalDataPagtoField] = useState("");
  const [modalBanco_idField, setModalBanco_idField] = useState("");
  const [modalConta_idField, setModalConta_idField] = useState("");
  const [modalPessoa_idField, setModalPessoa_idField] = useState("");
  const [modalId, setModalId] = useState("");
  const formatCurrency = (value) =>  {
//    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2})
  };

  const fields = [
    { label: "Lançto", key: "id", _style: { width: "10px" } },
    {
        label: "Data",
        key: "data_pagamento",
        _style: { width: "10px" },
      },
  
    { label: "Banco", key: "banco_desc", _style: { width: "80px" } },
    { label: "Conta", key: "conta_desc", _style: { width: "80px" } },
    { label: "Pessoa_id", key: "pessoa_desc", _style: { width: "80px" } },
    { label: "Valor", key: formatCurrency("valor_pagamento"), _style:{width: "80px"} },
    { label: "Ações", key: "actions", _style:{width:"1px"}},
  ];

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setLoading(true);
    const result = await api.getFin_Pagar_Receber();
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
//  const handleEditButton = (lancamento) => {
    let index = list.findIndex(v=>v.id===id);
    setModalId(list[index]["id"]);
    setModalTitleField(list[index]["title"]);
    setModalLancamentoField(list[index]["lancamento"]);
    setModalDataPagtoField(list[index]["data_pagto"]);
    setModalBanco_idField(list[index]["banco_idField"]); 
    setModalConta_idField(list[index]["conta_id"]);
    setModalPessoa_idField(list[index]["pessoa_id"]);
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

    setModalLancamentoField(""); 
    setModalDataPagtoField("");
    setModalBanco_idField("");
    setModalConta_idField("");
    setModalPessoa_idField("");
    setShowModal(true);
  };

  const handleModalSave = async () => {
    if (modalTitleField && modalDataPagtoField) {
      setModalLoading(true);
      let result;
      let data = {
        title: modalTitleField,
        lancamento: modalLancamentoField,
        data_pagto: modalDataPagtoField,
        banco_id: modalBanco_idField,
        conta_id: modalConta_idField,
        pessoa: modalPessoa_idField,
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
          <h2>Contas a Pagar e Receber</h2>
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
          {modalId === "" ? "Novo" : "Alterar"} - Contas a Pagar e Receber
        </CModalHeader>
        <CModalBody>
          <CFormGroup>
            <CLabel htmlFor="modal-title">Titulo do Aviso</CLabel>
            <CInput
              type="text"
              id="modal-title"
              placeholder="Digite um título para o aviso"
              value={modalTitleField}
              onChange={(e) => setModalTitleField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="modal-lancamento">Lançamento</CLabel>
            <CInput
              type="text"
              id="modal-lancamento"
              placeholder="Digite o número do Lançamento"
              value={modalLancamentoField}
              onChange={(e) => setModalLancamentoField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="modal-data_pagto">Data do Pagamento</CLabel>
            <CTextarea
              id="modal-data_pagto"
              placeholder="Digite o Data do Pagamento"
              value={modalDataPagtoField}
              onChange={(e) => setModalDataPagtoField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-conta_id">Conta Plano</CLabel>
            <CInput
              type="text"
              id="modal-conta_id"
              value={modalConta_idField}
              onChange={(e) => setModalConta_idField(e.target.value)}
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
