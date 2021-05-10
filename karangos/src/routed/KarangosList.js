import { useState, useEffect } from 'react'
import axios from 'axios'
import { DataGrid, useGridParamsApi } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Cód.', width: 100},
  { field: 'marca', headerName: 'marca', width: 100},
  { field: 'modelo', headerName: 'Modelo', width: 150},
  { field: 'cor', headerName: 'Cor', width: 150},
  { field: 'ano_fabricacao', headerName: 'Ano', width: 100},
  { field: 'importado', headerName: 'Importado?', width: 125},
  { field: 'placa', headerName: 'Placa', width: 100},
  { 
      field: 'preco', 
      headerName: 'Preço', 
      width: 150, 
      align: 'right',
      headerAlign: 'right',
      valueGetter: params => {
         // Number(params.getValue('preco').toLocaleString('pt-br'))
        useGridParamsApi.getValue('preco')
      }
    },
];

export default function KarangosList() {
//Variaveis que conterão dados PRECISAM ser inicializados como vetores vazios
    const [karangos, setKarangos] = useState([])

    useEffect(() => {
        async function getData() {
            try {// tenta buscar os dados
                let data = await axios.get('https://api.faustocintra.com.br/karangos')
                setKarangos(data)
            }
            catch(error) {
                console.error(error)
            }
        }
        getData()
    },[])// Quando a lista de dependencia é um vetor vazio, o useEffect()
    // é executado apenas uma vez, no carregamento inicial do componente

    return (
        <>
            <h1>Listagem de Karangos</h1>
                <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                <TableCell>Cód.</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Cor</TableCell>
                <TableCell>Ano</TableCell>
                <TableCell>Importado?</TableCell>
                <TableCell>Placa</TableCell>
                <TableCell align="right">Preço</TableCell>
             </TableRow>
            </TableHead>
        <TableBody>
        {karangos.map((karango) => (
                <TableRow key={karango.id}>
        <TableCell>{karango.id}</TableCell>
        <TableCell>{karango.marca}</TableCell>
        <TableCell>{karango.modelo}</TableCell>
        <TableCell>{karango.cor}</TableCell>
        <TableCell>{karango.ano_fabricacao}</TableCell>
        <TableCell>{karango.importado}</TableCell>
        <TableCell>{karango.placa}</TableCell>
        <TableCell align="right">
            {karango.preco
                        }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
        )
}