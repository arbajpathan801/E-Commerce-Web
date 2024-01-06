
import React from 'react'
import { Button, Container, ListGroup } from "react-bootstrap";

const TourList = () => {
    const ItemList = [
        {
          date: "JUL16",
          place: "DETROIT,MI",
          specPlace: "DTE ENERGY MUSIC THEATRE",
        },
        { date: "JUL19", place: "TORONTO,ON", specPlace: "BUDWEISER STAGE" },
        { date: "JUL22", place: "BRISTOW,VA", specPlace: "JIGGY LUBE LIVE" },
        { date: "JUL29", place: "PHOENIX,AZ", specPlace: "AK-CHIN PAVILION" },
        { date: "JUL2", place: "LAS VEGAS,NV", specPlace: "T-MOBILE ARENA" },
        { date: "JUL7", place: "CONCORD,CA", specPlace: "CONCORD PAVILION" },
      ];
  return (
    <Container className='col-10 '
    style={{ marginLeft: "20%", marginRight: "25%", marginTop: "30px" }}
  >
          
      {
        ItemList.map((i)=> (
          
          <ListGroup horizontal style={{maxWidth:'80%',textAlign:'center'}}>
            <ListGroup.Item
              style={{
                textAlign:'start',
                width: "10%",
                border: "unset",
                borderBottom: "1px solid black",
              }}
            >
             {i.date}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                width:'20%',
                textAlign:'start',
                border: "unset",
                borderBottom: "1px solid black",
              }}
            >
              {i.place}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                width:'40%',
                textAlign:'start',
                border: "unset",
                borderBottom: "1px solid black",
              }}
            >
              {i.specPlace}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                whidth:'25%',
                textAlign:'start',
                border: "unset",
                borderBottom: "1px solid black",
              }}
            >
              <Button variant='info' style={{width:'120px'}}>buy ticket</Button>
            </ListGroup.Item>
           
            </ListGroup>
        ))
      }
    </Container>
  )
}
export default TourList;