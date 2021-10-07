import React, {useState} from 'react';
import CompIcons from '../../../components/CompIcons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const Calon = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  
    return (
        <div>
            <Button style={{ backgroundColor: '#3F3D56' }} onClick={toggle}>Tambah Calon</Button>
            <Modal style={{ background: "#E5E5E5" }} isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle} style={{ color: "#3C6786" }}>Tambah Calon</ModalHeader>
                <ModalBody>
                    <FormGroup style={{ marginTop: 5 }}>
                        <Label for="exampleNama" style={{ color: "#3C6786" }} >Nama </Label>
                        <Input type="nama" name="nama" id="exampleNama" />
                    </FormGroup>
                    <Form style={{ marginTop: 13 }}>
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleKelas" style={{ color: "#3C6786" }}>Kelas </Label>
                                    <Input type="kelas" name="kelas" id="exampleKelas" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleFile" style={{ color: "#3C6786" }}>Foto </Label><Input type="file" name="file" id="exampleFile" style={{ color: "#3C6786" }} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <Form style={{ marginTop: 13 }}>
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleText" style={{ color: "#3C6786" }}>Visi </Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Label for="exampleText" style={{ color: "#3C6786" }}>Misi </Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={toggle}>Batal</Button>{' '}
                    <Button style={{ backgroundColor: '#3F3D56' }} onClick={toggle}>Tambah</Button>
                </ModalFooter>
            </Modal>
            <Table striped bordered hover>
                <thead >
                    <tr style={{textAlign: 'center', padding: '800px'}}>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Foto</th>
                    <th colSpan="3" id="label-action" style={{textAlign: 'center'}}>Action</th>
                    </tr>
                </thead>
                <tbody style={{height: '85px'}}>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><CompIcons name="test"/></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                        <CompIcons />
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Calon;
