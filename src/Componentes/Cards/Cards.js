import Card from 'react-bootstrap/Card';
import Table from '../Table/Table';
import messi from '../../imagenes/messi.webp';

import './Cards.scss';

export const Cards = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-8 d-flex ">
          <div className="row">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Card className="col-5 my-5 mx-2 position-static">
                <Card.Img src={messi} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. Lorem ipsum dolor sit amet consectetur
                    adipisicing
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-5 col-4 d-flex ">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Table />
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Table />
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
