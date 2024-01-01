import React from "react";
import { Button,Container,Table } from "react-bootstrap";

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
    <Container className=" "style={{paddingLeft:'20%',paddingTop:'5%' ,paddingRight:'20%'}} >
      <h2 style={{fontFamily: "Metal Mania",boxSizing:'border-box'}} className="fw-bold text-center">TOURS</h2>
      {ItemList.map((item)=> (
       
      
        <Table>
        <tbody>
         
          <th  className=" border-dark ">
          
           <td className=" p-3">{item.date}</td>
           <td  className="text-secondary p-3">{item.place}</td>
           <td  className="text-secondary p-3">{item.specPlace}</td>
           <td className="text-white p-3"><Button variant="info" className="text-white fs-6">BUY TICKET</Button></td>
          </th>
        </tbody>
        </Table>
      
      ))}
    </Container>
  );
};

export default TourList;
