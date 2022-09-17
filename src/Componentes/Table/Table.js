import React from 'react';
import Table from 'react-bootstrap/Table';
import './Table.scss';

function StripedRowExample() {
  return (
    <Table striped bordered hover className='tabla-goles'>
      <thead>
        <tr>
          <th>Goles</th>
          <th>Jugador</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Messi</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Ronaldo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
