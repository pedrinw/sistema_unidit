import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api.js'

import './style.css'

const Registro = () => {

    const [registeredMedicine, setRegisteredMedicine] = useState([])

    const [value, setValue] = useState(0)

    
    useEffect(() => {
        const path = window.location.pathname
        const codCurso = path.trim().split('/')[2]
        console.log(codCurso)
        api.get(`/aluno?cod_curso=${codCurso}`).then((response) => setRegisteredMedicine(response.data))
        .catch((err) => {
          console.log("ocorreu um erro", err)
        })
        
      }, [value])

    return(
        <div>
            
            <>

            <h3>Alunos matriculados</h3>
             <table>
                <thead>
                    <tr>
                        <td>Código do Aluno</td>
                        <td>Nome</td>
                        <td>Curso Matriculado</td>
                    </tr>
                </thead>

                <tbody>
                    {registeredMedicine.map((registered) => (
                    <tr key={registered.cod_aluno}>
                        <td>{registered.cod_aluno}</td>
                        <td>{registered.nome}</td>
                        <td>{registered.curso_nome}</td>
                    </tr>
                    ))}
                </tbody>
             </table>

             <div className="container-button">
                <Link to="/cursos"><button>Voltar</button></Link>
             </div>
            </>
           
        </div>
    )
}

export default Registro;