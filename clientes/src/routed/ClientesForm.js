import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import InputMask from 'react-input-mask'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

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

export default function ClientesForm() {
  const classes = useStyles()

  const colors = [
    'Amarelo',
    'Azul',
    'Bege',
    'Branco',
    'Cinza',
    'Dourado',
    'Laranja',
    'Marrom',
    'Prata',
    'Preto',
    'Rosa',
    'Roxo',
    'Verde',
    'Vermelho',
    'Vinho'
  ]

  const years = []
  for(let i = (new Date()).getFullYear(); i >= 1900; i--) years.push(i)

  // Classes de caracters para a máscara da placa
  // 1) Três primeiras posições, somente letras (maiúsculas ou minúsculas) ~> [A-Za-z]
  // 2) Quinta, sétima e oitava posições, somente dígitos ~> [0-9]
  // 3) Sexta posição: dígitos ou letras (maiúsculas ou minúsculas) de A a J ~> [0-9A-Ja-j]
  const formatChars = {
    'A': '[A-Za-z]',
    '0': '[0-9]',
    '#': '[0-9A-Ja-j]'
  }

  
  // Máscara de entrada para a placa
  const cpfMask = '000.000.000-00'

  const ufMask = 'AA'

  // Máscara para CPF: '000.000.000-00'
  // Máscara para CNPJ: '00.000.000/0000-00'

  const [clientes, setClientes] = useState({
    id: null,
    nome: '',
    cpf: '',
    rg: '',
    logradouro: '',
    num_imovel: '0',
    complemento: '',
    bairro: '',
    municipio: '',
    uf: '',
    telefone: '0',
    email: '',
  })
  
  const [currentId, setCurrentId] = useState()

  const [sendBtnStatus, setSendBtnStatus] = useState({
    disabled: false,
    label: 'Enviar'
  })

  const [sbStatus, setSbStatus] = useState({
    open: false,
    severity: 'success',
    message: '' 
  })

  const history = useHistory()

  function handleInputChange(event, property) {
    setCurrentId(event.target.id)
    if(event.target.id) property = event.target.id
    else if(property === 'cpf') {
      setClientes({...clientes, cpf: event.target.value.toUpperCase()})
    }
    else if(property === 'rg') {
      setClientes({...clientes, cpf: event.target.value.toUpperCase()})
    }

    else {
      // Quando o nome de uma propriedade de objeto aparece entre [],
      // significa que o nome da propriedade será determinado pela
      // variável ou expressão contida dentro dos colchetes
      setClientes({...clientes, [property]: event.target.value})
    }
  }

  async function saveData() {
    try {
      // Desabilita o botão de enviar para evitar envios duplicados
      setSendBtnStatus({disabled: true, label: 'Enviando...'})

      await axios.post('https://api.faustocintra.com.br/clientes', clientes)

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

    saveData()

  }

  function handleSbClose() {
    setSbStatus({...sbStatus, open: false})

    // Retorna para a página de listagem em caso de sucesso
    if(sbStatus.severity === 'success') history.push('/list')
  }

  return (
    <>
      <Snackbar open={sbStatus.open} autoHideDuration={6000} onClose={handleSbClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSbClose} severity={sbStatus.severity}>
          {sbStatus.message}
        </MuiAlert>
      </Snackbar>

      <h1>Cadastrar novo Cliente</h1>
      <form className={classes.form} onSubmit={handleSubmit}>

<TextField 
  id="nome" 
  label="Nome" 
  variant="filled"
  value={clientes.nome}
  onChange={handleInputChange}
  required  /* not null, precisa ser preenchido */
  placeholder="Informe o nome do cliente"
  fullWidth
/>
<InputMask
            id="cpf" 
            mask={cpfMask}
            formatChars={formatChars}
            value={clientes.cpfMask}
            onChange={(event) => handleInputChange(event, 'cpf')}
          >
            {() => <TextField 
              label="CPF" 
              variant="filled"
              required  /* not null, precisa ser preenchido */
              placeholder="Informe o CPF do Cliente"
              fullWidth
            />}
          </InputMask>
<TextField 
  id="rg" 
  label="RG" 
  variant="filled"
  value={clientes.rg}
  onChange={handleInputChange}
  required  /* not null, precisa ser preenchido */
  placeholder="Informe o rg do cliente"
  fullWidth
/>
        <TextField 
          id="logradouro" 
          label="Logradouro" 
          variant="filled"
          value={clientes.logradouro}
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o logradouro"
          select
          fullWidth
        />

        <TextField 
          id="num_imovel" 
          label="Número" 
          variant="filled"
          value={clientes.num_imovel}
          onChange={handleInputChange)}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o número do imovel do cliente"
          select
          fullWidth
        />
          
          <TextField 
            id="complemento" 
            label="Complemento" 
            variant="filled"
            value={clientes.complemento}
            onChange={handleInputChange}
            required  /* not null, precisa ser preenchido */
            placeholder="Informe complemento do imovel do cliente"
            fullWidth
          />
          <TextField 
            id="bairro" 
            label="Bairro" 
            variant="filled"
            value={clientes.bairro}
            onChange={handleInputChange}
            required  /* not null, precisa ser preenchido */
            placeholder="Informe o bairro do imovel do cliente"
            fullWidth
          />
          <TextField 
            id="municipio" 
            label="Município" 
            variant="filled"
            value={clientes.municipio}
            onChange={handleInputChange}
            required  /* not null, precisa ser preenchido */
            placeholder="Informe o município do imovel do cliente"
            fullWidth
          />

<InputMask
            id="uf" 
            mask={cpfMask}
            formatChars={formatChars}
            value={clientes.ufMask}
            onChange={(event) => handleInputChange(event, 'cpf')}
          >
            {() => <TextField 
              label="UF" 
              variant="filled"
              required  /* not null, precisa ser preenchido */
              placeholder="Informe o UF do imovel do cliente"
              fullWidth
            />}
          </InputMask>
          <TextField 
            id="telefone" 
            label="Telefone" 
            variant="filled"
            value={clientes.telefone}
            onChange={handleInputChange}
            required  /* not null, precisa ser preenchido */
            placeholder="Informe o telefone do cliente"
            fullWidth
          />
          <TextField 
            id="telefone" 
            label="Telefone" 
            variant="filled"
            value={clientes.telefone}
            onChange={handleInputChange}
            required  /* not null, precisa ser preenchido */
            placeholder="Informe o telefone do cliente"
            fullWidth
          />
  
          <Toolbar className={classes.toolbar}>
            <Button type="submit" variant="contained" color="secondary" disabled={sendBtnStatus.disabled}>
              {sendBtnStatus.label}
            </Button>
            <Button variant="contained">Voltar</Button>
          </Toolbar>
  
          <div>
            {JSON.stringify(karango)}
            <br />
            currentId: {JSON.stringify(currentId)}
          </div>
        </form>
      </>
    )
  }