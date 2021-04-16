import React, { useState, useEffect } from 'react'
import { Container, Header, Info, NewTasks, GetTasks, Task, ContainerTask } from './styles';
import { Form, Input } from '@rocketseat/unform'
import Modal from 'react-modal';
import { FiCheck, FiXCircle, FiEdit3 } from 'react-icons/fi';
import { conclusaoOnChange, entregaOnChange, nomeOnChange } from '../../store/actions/tarefaAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
var cod = -1
function Dashboard(props) {
  const [name, setName] = useState();
  const [task, setTask] = useState([]);
  const [modalIsOpen,setIsOpen] = useState(false);
  const [modalIsOpenC, setIsOpenC] = useState(false);
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [dtOne, setDtOne] = useState();
  const [dtTwo, setDtTwo] = useState();
  const [nameBtn, setnameBtn] = useState('Criar');
  const [TaskConcluida, setTaskConcluida] = useState(false);
  const [TaskAtrasada, setTaskAtrasada] = useState(false);
  useEffect(() => {
    async function buscarNome() {
      const buscaName = localStorage.getItem("nome");
      setName(buscaName)
    }
    buscarNome();
  }, [])
  function SignOut() {
    localStorage.removeItem("autenticado")
    window.location.reload();
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  function openModalC() {
    setIsOpenC(true);
  }
  function closeModalC(){
    setIsOpenC(false);
  }
  function handleSubmit(data) {
    cod = cod + 1
    if(data.id){
      let cc = task.filter(e=> e.id == data.id)
      cc[0].title = data.title
      cc[0].date_entrega = data.date_entrega
      cc[0].date_conclusao = data.date_conclusao
    }else{
      console.log(cod);
      data['id'] = cod
      setTask((task) => [...task, data])
    }
    limparForm()
    setnameBtn('Criar')
  }
  function limparForm() {
    setId('');
    setNome('');
    setDtOne('');
    setDtTwo('');
  }
  function editar(task) {
    setnameBtn('Salvar')
    setId(task.id)
    setNome(task.title)
    setDtTwo(task.date_conclusao)
    setDtOne(task.date_entrega)
  }
  function deleteTask(data) {
    const index = task.findIndex(tasks => tasks.id === data.id );
    const newTasks = task;  
    newTasks.splice(index, 1);
    setTask([...newTasks]);
    setIsOpen(false)
  }
  function concluirTaks(data) {
    const index = task.findIndex(tasks => tasks.id === data.id );
    if(new Date(data.date_entrega) < new Date()){
        alert('A tarefa não pode ser concluida, pois está atrasada');
        return;
    }
    setTaskAtrasada(false);
    setTaskConcluida(true);
    setIsOpenC(false);
  }
  return (
    <>
      <Container>
        <Header>
          <h1>Taks Manager</h1>
          <Info>
            <p>Olá, {name}</p>
            <button type="submit" onClick={() => SignOut()}>SignOut</button>
          </Info>
        </Header>
        <hr />
        <NewTasks>
          <Form onSubmit={handleSubmit}>
            <h1>CRIE UMA NOVA TAREFA</h1>
            <hr />

            <Input  className="id" type="text" name="id" value={id} placeholder="id" disabled/>
            <Input type="text" className="name" name="title" value={props.name} onChange={props.nomeOnChange} placeholder="Nome da Tarefa" required /><br />

             <label>Entrega</label> <Input type="date" className="data" name="date_entrega"  value={props.date_entrega} onChange={props.entregaOnChange} required /><br />
             <label>Conclusão</label> <Input type="date" name="date_conclusao" className="dataC" value={props.date_conclusao} onChange={props.conclusaoOnChange} placeholder="Nome da Tarefa" />
            <button type="submit">{nameBtn} </button>

          </Form>
          <GetTasks>
            <h1>TASKS</h1>
            {
              task.map((tasks) => (
                <>
                <Task conclusao={TaskConcluida} atraso={TaskAtrasada}>
                  <h2>{tasks.title}</h2>
                  <hr />
                  <h4>{tasks.date_entrega}</h4>
                  <h4>{tasks.date_conclusao}</h4>
                  <button className="edit" onClick={() => editar(tasks)}><FiEdit3 /></button>
                  <button className="delete" onClick={openModal}><FiXCircle /></button>
                  <button className="check" onClick={openModalC}><FiCheck /></button>
                  </Task>
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                >
                  <ContainerTask>
                  <h3 className="titleModal">Tem certeza que deseja deletar a task ?</h3>
                  <button className="modalButtonCancelar" onClick={closeModal}>Cancelar</button>
                  <button className="modalButtonExcluir" onClick={() => deleteTask(tasks)}>Deletar</button>
                  </ContainerTask>
              </Modal>
              <Modal
                  isOpen={modalIsOpenC}
                  style={customStyles}
                >
                  <ContainerTask>
                  <h3 className="titleModal">Tem certeza que deseja concluir a task ?</h3>
                  <button className="modalButtonCancelar" onClick={closeModalC}>Cancelar</button>
                  <button className="modalButton" onClick={() => concluirTaks(tasks)}>Concluir</button>
                  </ContainerTask>
              </Modal>
              
              </>
              ))
            }
          </GetTasks>
        </NewTasks>
        
      </Container>
    </>
  );
}

const mapStateToProps = store => ({
  name: store.fomTask.name,
  date_entrega: store.fomTask.date_entrega,
  date_conclusao: store.fomTask.date_conclusao,
})

const mapActionToProps = dispatch => bindActionCreators({
  nomeOnChange,
  entregaOnChange,
  conclusaoOnChange
}, dispatch);


export default connect(mapStateToProps, mapActionToProps)(Dashboard);