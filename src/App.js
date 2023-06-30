import React, { useState, useEffect } from "react";
import {
  // Button,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { REMAINING_LIST_OF_MEMBERS, LIST_OF_MEMBERS } from "./config/Constant";

function App() {
  const [selectedMember, setSelectedMember] = useState("");
  const [timer, setTimer] = useState(11);

  const selectMember = () => {
    let memberId =
      REMAINING_LIST_OF_MEMBERS[
        Math.floor(Math.random() * REMAINING_LIST_OF_MEMBERS.length)
      ];

    setSelectedMember(memberId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        console.log(prevTimer);
        if (prevTimer <= 0) {
          // selectMember();
          clearInterval(interval);
          return 0;
        } else {
          selectMember();
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Row className="mt-25">
      <Col lg={4}>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <CardHeader style={{ backgroundColor: "yellow" }}>
            <strong>Total Members</strong>
          </CardHeader>
          <ListGroup flush>
            {LIST_OF_MEMBERS.map((data, index) => {
              if (data.status) {
                return (
                  <ListGroupItem
                    style={{ backgroundColor: "red", color: "white" }}
                  >{`${data.id}. ${data.name}`}</ListGroupItem>
                );
              } else {
                return (
                  <ListGroupItem>{`${data.id}. ${data.name}`}</ListGroupItem>
                );
              }
            })}
          </ListGroup>
        </Card>
      </Col>
      <Col lg={4}>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <CardHeader style={{ backgroundColor: "yellow" }}>
            <strong>Remaining members for bhishi</strong>
          </CardHeader>
          <ListGroup flush>
            {REMAINING_LIST_OF_MEMBERS.map((data, index) => {
              return (
                <ListGroupItem>{`${data.id}. ${data.name}`}</ListGroupItem>
              );
            })}
          </ListGroup>
        </Card>
      </Col>
      <Col lg={4} style={{ textAlign: "center" }}>
        {/* <Button color="danger" onClick={selectMember} className="mt-25 cp">
          Lucky One
        </Button> */}
        <h3 className="mt-50">
          {timer !== 0 && (
            <>
              <div style={{ fontSize: "20px" }}>Count Down</div>
              <h3 className="mt-50 countdown-member-color">{timer}</h3>
            </>
          )}
        </h3>

        <h3 className="mt-50">
          {timer === 0 && (
            <>
              <div style={{ fontSize: "20px" }}>!!Congratulations!!</div>
              <h3 className="countdown-member-color mt-50">
                {/* {selectedMember && `${selectedMember.id}. ${selectedMember.name}`} */}
                {selectedMember && `${selectedMember.name}`}
              </h3>
            </>
          )}
        </h3>
      </Col>
    </Row>
  );
}

export default App;
