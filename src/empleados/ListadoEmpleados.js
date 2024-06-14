import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';

export default function ListadoEmpleados() {

    //Constante añadido que es la END-POINT de donde se hacen las peticiones de la Base de Datos

    const urlBase="http://localhost:8080/rh-app/empleados";

    //Creacion del Arreglo de los empleados de la base de datos
    const [empleados, setEmpleados] = useState([]);

    //Hook con función flecha que sirve para cargar los empleados
    useEffect(()=>{
        cargarEmpleados();
    //Cerrando con un arreglo vacío damos a entender que se ejecutará solo una vez
    },[]);
    // Variable con los empleados
    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar empleados")
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

  return (
    <div className="container">
        <div className="container text-center" style={{margin: "30px"}}>
            <h3> Sistema de Recursos Humanos </h3>
        </div>
        <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Empleado</th>
                <th scope="col">Departamento</th>
                <th scope="col">Sueldo</th>
            </tr>
        </thead>
        <tbody>
            {//INGRESAMOS LLAVES PORQUE VAMOS A INGRESAR CODIGO JAVASCRIPT
            //ITERAMOS EL ARREGLO DE EMPLEADOS
            empleados.map((empleado, indice)=>(
            <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td><NumericFormat value={empleado.sueldo}
                    displayType={'text'}
                    thousandSeparator=',' prefix={'$'}
                    decimalScale={2} fixedDecimalScale></NumericFormat>
                
                </td>
                
            </tr>
            ))
            }
        </tbody>
        </table>
    </div>
  )
}
