import React, { useState, useEffect } from "react";
import api from '../Api'
import { Container, Modal } from "react-bootstrap";
import { DrinksForm } from "./adminForms/DrinksForm";
import { EventForm } from "./adminForms/EventForm";



export const Form = (Props: any) => {

    return (
        <Modal show={Props.hideOrShow} onHide={Props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>{Props.formMode}</Modal.Title>
            </Modal.Header>
            <Container>
                {
                    Props.formMode === 'Event-Form' ? <EventForm /> : <></>
                }
                {
                    Props.formMode === 'Drink-Form' ? <DrinksForm /> : <></>
                }
            </Container>
        </Modal>
    )
}