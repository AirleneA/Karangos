import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputMask from 'react-input-mask'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'
import ConfirmDialog from '../ui/ConfirmDialog'


const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '80%',
    margin: '0 auto',
    '& .MuiFormControl-root': {
      minWidth: '200px',
      maxWidth: '500px',
      margin: '0 24px 24px 0'
    }
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: '36px'
  }
}))

export default function ClinetesForm() {
  const classes = useStyles()

  const estados = [
    `AL`,
    `AP`,
    `AM`,
    `BA`,
    `CE`,
    `DF`,
    `ES`,
    `GO`,
    `MA`,
    `MT`,
    `MS`,
    `MG`,
    `PA`,
    `PB`,
    `PR`,
    `PE`,
    `PI`,
    `RJ`,
    `RN`,
    `RS`,
    `RO`,
    `RR`,
    `SC`,
    `SP`, 
    `SE`,
    `TO`, 
]
  // Classes de caracters para a máscara da placa
  // 1) Três primeiras posições, somente letras (maiúsculas ou minúsculas) ~> [A-Za-z]
  // 2) Quinta, sétima e oitava posições, somente dígitos ~> [0-9]
  // 3) Sexta posição: dígitos ou letras (maiúsculas ou minúsculas) de A a J ~> [0-9A-Ja-j]
  const formatChars = {
    'A': '[A-Za-z]',
    '0': '[0-9]',
    '#': '[0-9A-Ja-j]'
  }

  // Máscara para CPF: '000.000.000-00'
  const cpfMask = '000.000.000-00'

  const [cliente, setCliente] = useState({
    id: null,
    nome: '',
    cpf: '',
    rg: '',
    logradouro: '',
    num_imovel: '',
    complemento:'',
    bairro: '',
    município: '',
    uf: '', 
    telefone: '',
    email: '',
  })

  const [sendBtnStatus, setSendBtnStatus] = useState({
    disabled: false,
    label: 'Enviar'
  })

  const [sbStatus, setSbStatus] = useState({
    open: false,
    severity: 'success',
    message: '' 
  })

  const [error, setError] = useState({
    marca: '',
    modelo: '',
    cor: '',
    placa: '',
    preco: ''
  })

  const [isModified, setIsModified] = useState(false)

  const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação está aberto?

  const [title, setTitle] = useState('Cadastrar novo karango')

  const history = useHistory()
  const params = useParams()

  // useEffect() para quando o formulário for carregado (só na inicialização)
  useEffect(() => {
    // Verificamos se a rota atual contém o parâmetro id
    // Em caso positivo, buscamos os dados no back-end e carregamos o formulário para edição
    if(params.id) {
      setTitle('Editar cliente')
      getData(params.id)
    }
  },[params.id])

  async function getData(id) {
    try {
      let response = await axios.get(`https://api.faustocintra.com.br/clientes/${id}`)
      setCliente(response.data)
    }
    catch(error) {
      setSbStatus({
        open: true,
        severity: 'error',
        message: 'Não foi possível carregar os dados para edição.'
      })
    }
  }

  function handleInputChange(event, property) {

    const clienteTemp = {...cliente}

    // eslint-disable-next-line no-undef
    setCurrentId(event.target.id)
    if(event.target.id) property = event.target.id

   if(property === 'cpf') {
      clienteTemp.cpf = event.target.value.toUpperCase()
    }
    else {
      // Quando o nome de uma propriedade de objeto aparece entre [],
      // significa que o nome da propriedade será determinado pela
      // variável ou expressão contida dentro dos colchetes
     clienteTemp[property] = event.target.value
    }
    setCliente(clienteTemp)
    setIsModified(true)   // O formulário foi modificado
    validate(clienteTemp)  // Dispara a validação
  }

  function validate(data) {
    let isValid = true

    const errorTemp = {
      nome: '',
      cpf: '',
      rg: '',
      logradouro: '',
      num_imovel: '',
      complemento:'',
      bairro: '',
      município: '',
      uf: '', 
      telefone: '',
      email: '',
    }

    // trim(): retira espaços em branco do início e do final de uma string
    if(data.nome.trim() === '') {
      errorTemp.nome = 'O nome deve ser preenchido'
      isValid = false
    }    

    if(data.cpf.trim() === '' || data.cpf.includes('_')) {
      errorTemp.cpf = 'O cpf deve ser preenchido corretamente'
      isValid = false
    }

    if(data.rg.trim() === '') {
      errorTemp.rg = 'O rg deve ser preenchido'
      isValid = false
    }
    
    if(data.logradouro.trim() === '') {
      errorTemp.logradouro = 'O logradouro deve ser preenchido'
      isValid = false
    }

    if(data.num_imovel.trim() === '') {
      errorTemp.num_imovel = 'O número do imóvel deve ser preenchido'
      isValid = false
    }

    if(data.bairro.trim() === '') {
      errorTemp.bairro = 'O bairro deve ser preenchido'
      isValid = false
    }
   
    if(data.municipio.trim() === '') {
      errorTemp.minicipio = 'O município  deve ser preenchido'
      isValid = false
    }

    if(data.uf.trim() === '') {
      errorTemp.cor = 'O estado deve ser informado'
      isValid = false
    } 

    if(data.telefone.trim() === '') {
      errorTemp.telefone = 'O telefone deve ser preenchido'
      isValid = false
    }

    if(data.email.trim() === '') {
      errorTemp.email = 'O email deve ser informado'
      isValid = false
    }

    setError(errorTemp)
    return isValid
  }

  async function saveData() {
    try {
      // Desabilita o botão de enviar para evitar envios duplicados
      setSendBtnStatus({disabled: true, label: 'Enviando...'})
      
      // Se estivermos editando, precisamos enviar os dados com o verbo HTTP PUT
      if(params.id) await axios.put(`https://api.faustocintra.com.br/clientes/${params.id}`, cliente)
      // Senão, estaremos criando um novo registro, e o verbo HTTP a ser usado é o POST
      else await axios.post('https://api.faustocintra.com.br/clientes', cliente)
      
      // Mostra a SnackBar
      setSbStatus({open: true, severity: 'success', message: 'Dados salvos com sucesso!'})
      
    }
    catch(error) {
      // Mostra a SnackBar
      setSbStatus({open: true, severity: 'error', message: 'ERRO: ' + error.message})
    }
    // Restaura o estado inicial do botão de envio
    setSendBtnStatus({disabled: false, label: 'Enviar'})
  }

  function handleSubmit(event) {

    event.preventDefault()    // Evita que a página seja recarregada

    // Só envia para o banco de dados se o formulário for válido
    if(validate(cliente)) saveData()

  }

  function handleSbClose() {
    setSbStatus({...sbStatus, open: false})

    // Retorna para a página de listagem em caso de sucesso
    if(sbStatus.severity === 'success') history.push('/list')
  }

  function handleDialogClose(result) {
    setDialogOpen(false)

    // Se o usuário concordou em voltar 
    if(result) history.push('/list')
  }

  function handleGoBack() {
    // Se o formulário tiver sido modificado, exibimos o diálogo de confirmação
    if(isModified) setDialogOpen(true)
    // Senão, podemos voltar diretamente para a listagem
    else history.push('/list')
  }

  return (
    <>

      <ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose}>
        Há dados não salvos. Deseja realmente voltar?
      </ConfirmDialog>

      <Snackbar open={sbStatus.open} autoHideDuration={6000} onClose={handleSbClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSbClose} severity={sbStatus.severity}>
          {sbStatus.message}
        </MuiAlert>
      </Snackbar>

      <h1>{title}</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        
        <TextField 
          id="nome" 
          label="Nome" 
          variant="filled"
          value={cliente.nome}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe a marca do veículo"
          fullWidth
          error={error.nome !== ''}
          helperText={error.nome}
        />

        <InputMask
          id="cpf" 
          mask={cpfMask}
          formatChars={formatChars}
          value={cliente.cpf}
          onChange={(event) => handleInputChange(event, 'cpf')}
        >
          {() => <TextField 
            label="CPF" 
            variant="filled"
            required  /* not null, precisa ser preenchido */
            placeholder="Informe o CPF do cliente"
            fullWidth
            error={error.cpf !== ''}
            helperText={error.cpf}
          />}
        </InputMask>
        
        <TextField 
          id="rg" 
          label="RG" 
          variant="filled"
          value={cliente.rg}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o rg do cliente"
          fullWidth
          error={error.rg !== ''}
          helperText={error.rg}
        />

        <TextField 
          id="logradouro" 
          label="Logradouro" 
          variant="filled"
          value={cliente.logradouro}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o logradouro do imovel do cliente"
          fullWidth
          error={error.logradouro !== ''}
          helperText={error.logradouro}
        />

        <TextField 
          id="num_imovel" 
          label="Número do imovel" 
          variant="filled"
          value={cliente.num_imovel}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o número do imóvel do cliente"
          fullWidth
          error={error.num_imovel !== ''}
          helperText={error.num_imovel}
        />

        <TextField 
          id="complemento" 
          label="Complemento" 
          variant="filled"
          value={cliente.complemento}
          onChange={handleInputChange}
          fullWidth
        />
        
        <TextField 
          id="bairro" 
          label="Bairro" 
          variant="filled"
          value={cliente.bairro}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o bairro do imovel do cliente"
          fullWidth
          error={error.bairro !== ''}
          helperText={error.bairro}
        />

        <TextField 
          id="municipio" 
          label="Município" 
          variant="filled"
          value={cliente.municipio}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o município"
          fullWidth
          error={error.municipio !== ''}
          helperText={error.municipio}
        />

        <TextField 
          id="uf" 
          label="UF" 
          variant="filled"
          value={cliente.useEffect}
          onChange={event => handleInputChange(event, 'cor')}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe estado"
          select
          fullWidth
          error={error.uf !== ''}
          helperText={error.uf}
        >
          { estados.map(uf => <MenuItem value={uf} key={uf}>{uf}</MenuItem>)}
        </TextField>

        <TextField 
          id="telefone" 
          label="Telefone" 
          variant="filled"
          value={cliente.telefone}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o telefone do cliente"
          fullWidth
          error={error.telefone !== ''}
          helperText={error.telefone}
        />
          
        <TextField 
          id="email" 
          label="Email" 
          variant="filled"
          value={cliente.email}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o email do cliente"
          fullWidth
          error={error.email !== ''}
          helperText={error.email}
        />

        <Toolbar className={classes.toolbar}>
          <Button type="submit" variant="contained" color="secondary" disabled={sendBtnStatus.disabled}>
            {sendBtnStatus.label}
          </Button>
          <Button variant="contained" onClick={handleGoBack}>Voltar</Button>
        </Toolbar>

        {/* <div>
          {JSON.stringify(karango)}
          <br />
          currentId: {JSON.stringify(currentId)}
          <br />
          isModified: {JSON.stringify(isModified)}
        </div> */}
      </form>
    </>
  )
}