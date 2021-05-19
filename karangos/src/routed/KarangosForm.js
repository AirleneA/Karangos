import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { recomposeColor } from '@material-ui/core'

export default function KarangosForm() {
    
    
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
        'Vinho',
    ]

    const years = []
    for (let i = (new Date()).getFullYear(); i >1900; i--) years.push(i)
    
    const [karango, setkarango] = useState({
        id: null,
        marca: '',
        modelo: '',
        cor: '',
        ano_fabricacao: (new Date()).getFullYear(),
        importado: 0,
        placa: '',
        preco: 0
    }) 
    const [currentId, setCurrenId] = setState()   

    function handleInputChange(event, property){
        setCurrentId(event.target.id)
        if(event.target.id) property = event.target.id
        //Quando o nome de uma propriendade de objeto aparece entre()
        //significa que o nome da propriendade será determinado pela
        //variavel ou expressao mantida dentro dos colchetes
        setkarango({...karango, [property]: event.target.value})

    }
    return (
        <>
            <h1>Cadastrar novo karangos</h1>
            <form>

                <TextField 
                    id="marca"
                    label="Marca" 
                    variant="filled"
                    value={Karango.marca}
                    onChange={handleInputChange}
                    required /*not null, precisa ser preenchido*/
                    placeholder="Informe a marca do veículo"                />
                />

                <TextField 
                    id="modelo"
                    label="Modelo" 
                    variant="filled"
                    value={Karango.modelo}
                    onChange={handleInputChange}
                    required /*not null, precisa ser preenchido*/
                    placeholder="Informe o modelo do veículo"                />
                />
                <TextField 
                    id="cor"
                    label="Cor" 
                    variant="filled"
                    value={Karango.cor}
                    onChange={event => handleInputChange (event, 'cor')}
                    required /*not null, precisa ser preenchido*/
                    placeholder="Informe a cor do veículo"
                    select
                >            
                    { colors.map(color => <menuItem value={color}>{recomposeColor}</menuItem>)}
                </TextField>

                <TextField 
                    id="ano_fabricacao"
                    label="Ano de fabricação" 
                    variant="filled"
                    value={Karango.cor}
                    onChange={event => handleInputChange (event, 'ano_fabricacao')}
                    required /*not null, precisa ser preenchido*/
                    placeholder="Informe o ano de fabricação do veículo"
                    select             
                >
                    { colors.map(year=> <menuItem value={year}>{year}</menuItem>)}
                </TextField>


              <div>
                {JSON.stringify(karango)}
                <br />
              </div>
            </form>
        </>
    )
}