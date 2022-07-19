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

export default function Trabalhadores() {
  const api = useApi();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalTitleField, setModalTitleField] = useState("");
  const [modalMatriculaField, setModalMatriculaField] = useState("");
  const [modalNomeField, setModalNomeField] = useState("");
  const [modalCPFField, setModalCPFField] = useState("");
  const [modalAdmissaoField, setModalAdmissaoField] = useState("");
  const [modalId, setModalId] = useState("");
  const formatCurrency = (value) =>  {
//    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2})
  };

  const fields = [
    { label: "Matrícula", key: "matricula", _style: { width: "80px" } },
    { label: "Nome", key: "nome", _style: { width: "300px" } },
    { label: "CPF", key: "cpf", _style: { width: "80px" } },
    { label: "Categoria", key: "categoria", _style: { width: "80px" } },
    {
      label: "Admissão",
      key: "admissao_data",
      _style: { width: "80px" }
    },
    {
      label: "Demissão",
      key: "demissao",
      _style: { width: "80px" },
    },
    { label: "Salário", key: formatCurrency("salario_fixo"), _style:{width: "80px"} },
    { label: "Ações", key: "actions", _style:{width:"1px"}},
  ];

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setLoading(true);
    const result = await api.getTrabalhadores();
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
//  const handleEditButton = (matricula) => {
    let index = list.findIndex(v=>v.id===id);
    setModalId(list[index]["id"]);
    setModalTitleField(list[index]["title"]);
    setModalMatriculaField(list[index]["matricula"]);
    setModalNomeField(list[index]["nome"]);
    setModalCPFField(list[index]["CPFField"]); 
    setModalAdmissaoField(list[index]["admissao"]);
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

    setModalMatriculaField(""); 
    setModalNomeField("");
    setModalCPFField("");
    setModalAdmissaoField("");
    setShowModal(true);
  };

  const handleModalSave = async () => {
    if (modalTitleField && modalNomeField) {
      setModalLoading(true);
      let result;
      let data = {
        title: modalTitleField,
        matricula: modalMatriculaField,
        nome: modalNomeField,
        cpf: modalCPFField,
        admissao: modalAdmissaoField,
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
          <h2>Cadastro de Trabalhadores</h2>
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
          {modalId === "" ? "Novo" : "Alterar"} Trabalhador
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
            <CLabel htmlFor="modal-matricula">Matrícula</CLabel>
            <CInput
              type="text"
              id="modal-matricula"
              placeholder="Digite a Matrícula do Trabalhador"
              value={modalMatriculaField}
              onChange={(e) => setModalMatriculaField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="modal-nome">Nome do Trabalhador</CLabel>
            <CTextarea
              id="modal-nome"
              placeholder="Digite o nome do Trabalhador"
              value={modalNomeField}
              onChange={(e) => setModalNomeField(e.target.value)}
              disabled={modalLoading}
            />
          </CFormGroup>

          <CFormGroup>
            <CLabel htmlFor="modal-admissao">Data de Admissão</CLabel>
            <CInput
              type="text"
              id="modal-admissao"
              value={modalAdmissaoField}
              onChange={(e) => setModalAdmissaoField(e.target.value)}
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
          backdrop="static"
        </CModalFooter>
      </CModal>
    </>
  );
}
