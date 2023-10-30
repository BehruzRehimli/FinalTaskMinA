import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MdModeEdit } from "react-icons/md"
import { json } from 'react-router-dom';
import { Formik } from 'formik';


const App = ({ id, row, setRow }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    let changeIndex;

    const showModal = (e) => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        var color =document.getElementById("color").value
        var answer =document.getElementById("answer").value

        let newarr=[...row]
        newarr[id].color=color
        newarr[id].answer=answer

        setRow(newarr)

        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
            <button className='edit-btn ms-2' id={id} onClick={showModal}>
                <MdModeEdit id={id} style={{ fill: "orange" }} />
            </button>
            <Modal
                title="Change Data"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div style={{ position: "relative", paddingBottom: "30px" }}>
                    <label style={{ color: '#333' }} htmlFor="answer">Answer</label>
                    <input defaultValue={row[id].answer} style={{ backgroundColor: "rgb(210,210,210)", color: "black" }} className='form-control' id='answer' type="text" />
                    <label style={{ color: '#333' }} htmlFor="color">Color</label>
                    <button style={{position:"relative",width:"50%",borderRadius:"10px",minHeight:"30px",border:"none",outline:"none",backgroundColor:"#00ddff"}}> Change Color       
                    <input defaultValue={row[id].color} style={{ backgroundColor: "rgb(210,210,210)", color: "black",position:"absolute",width:"100%",height:"100%",top:"-10px",left:"0",opacity:"0" }} className='form-control' type="color" id='color' />
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default App;