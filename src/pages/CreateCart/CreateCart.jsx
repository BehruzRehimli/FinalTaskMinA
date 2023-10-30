import React, { useState } from 'react'
import Map from '../../components/Map/Map'
import { Formik } from 'formik';
import { RiDeleteBin6Fill } from "react-icons/ri"
import { MdModeEdit } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../../Redux/Features/cart/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import formData from '../../jsons/form-settings.json'
import Modal from '../../components/Modal/Modal';


const CreateCart = () => {

    const dispatch = useDispatch()

    let datas = (useSelector(state => state)).carts;


    const handleDelete = e => {
        var newarr = [...rows]
        newarr.splice(e.target.id + 1, 1)
        setRows(newarr);
        localStorage.setItem("table", JSON.stringify(newarr))
    }


    const colums = [
        {
            title: "Color",
            dataIndex: "color",
            key: "color",
            render: (color) => {
                return <span style={{ color: color, borderColor: color }}>NFL</span>
            }
        },
        {
            title: "Answers",
            dataIndex: "answer",
            key: "answer"
        },
        {
            title: "Oparations",
            key: 'oparations',
            render: (elem, index) => (
                <div className='d-flex buttons'>
                    <button className='delete-btn' id={elem.answer}>
                        <RiDeleteBin6Fill style={{ fill: "red" }} />
                    </button>
                    <button className='edit-btn ms-2'>
                        <MdModeEdit style={{ fill: "orange" }} />
                    </button>
                </div>
            )
        }
    ]




    const [rows, setRows] = useState(JSON.parse(localStorage.getItem("table")) ? JSON.parse(localStorage.getItem("table")) : [])

    return (
        <main>
            <div className="my-container d-flex">
                <div className="content-box create pe-3" >
                    <div className="form-box create-cart" id='create-cart'>
                        <p className="char-header form-header">
                            {formData.title}
                        </p>
                        <Formik
                            initialValues={{ title: '', subtitle: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.title) {
                                    errors.title = "Title is required!"
                                }
                                if (!values.subtitle) {
                                    errors.subtitle = "Description is required!"
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                values.id = 5
                                values.url = "/survey/turkiye-genel-secimleri-2023"
                                values.img = "https://i.ibb.co/0qQmHw4/animg4.png"
                                dispatch(createCart(values))
                                toast.success("Created new cart")
                                setSubmitting(false)
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor={formData.fields[0].field}>
                                        {formData.fields[0].label}
                                    </label>
                                    <input
                                        type={formData.fields[0].type}
                                        name={formData.fields[0].field}
                                        id={formData.fields[0].field}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        className='form-control'
                                        required={formData.fields[0].required}
                                        defaultValue={formData.fields[0].default}
                                    />
                                    <p className="text-danger">
                                        <p style={{ color: "red" }}>{errors.title && touched.title && errors.title}</p>
                                    </p>
                                    <label htmlFor="desc">
                                        {formData.fields[1].label}
                                    </label>
                                    <textarea
                                        name="subtitle"
                                        id='desc'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subtitle}
                                        className='form-control'
                                        required={formData.fields[1].required}
                                        defaultValue={formData.fields[1].default}

                                    />
                                    <p className="text-danger">
                                        <p style={{ color: "red" }}>{errors.subtitle && touched.subtitle && errors.subtitle}</p>
                                    </p>
                                    <label htmlFor="option1">{formData.fields[2].label}</label>
                                    <select className='form-control' name="option1" id="option1">
                                        {
                                            formData.fields[2].data.map((elem) => (
                                                <option value={elem.value}>{elem.label}</option>
                                            ))
                                        }

                                    </select>
                                    <label htmlFor="option2">{formData.fields[3].label}</label>
                                    <select className='form-control' name="option2" id="option2">
                                        {
                                            formData.fields[3].data.map((elem) => (
                                                <option value={elem.value}>{elem.label}</option>
                                            ))
                                        }
                                    </select>
                                    <label htmlFor="">{formData.fields[4].label}</label>
                                    <div className='d-flex mb-2'>
                                        <input type="text" id='answer-input' className='form-control' placeholder='Write Answer' />
                                        <button className='btn btn-warning ms-2 answer first'>Choose Color
                                            <input type="color" id='color-input' />
                                        </button>
                                        <span onClick={() => {
                                            var input = document.getElementById("color-input")
                                            var input2 = document.getElementById("answer-input")
                                            const newdata = {
                                                color: input.value,
                                                answer: input2.value
                                            }

                                            var newarr = [...rows]
                                            newarr.push(newdata)
                                            setRows(newarr)
                                            localStorage.setItem("table", JSON.stringify(newarr))

                                        }} className='btn btn-light ms-2 answer second'>Add To List</span>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Color</th>
                                                <th>Answer</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (typeof rows == "object") && rows.map((elem, index) => {
                                                    return (
                                                        <tr>
                                                            <td><span style={{ color: elem.color, borderColor: elem.color }}>NFL</span></td>
                                                            <td>{elem.answer}</td>
                                                            <td>
                                                                <div className='d-flex buttons'>
                                                                    <button className='delete-btn' >
                                                                        <RiDeleteBin6Fill id={index} onClick={handleDelete} style={{ fill: "red" }} />
                                                                    </button>
                                                                    <Modal id={index} row={rows} setRow={setRows} />


                                                                </div>
                                                            </td>
                                                        </tr>

                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div className="text-end mt-3" style={{ textAlign: "end" }}>
                                        <button className='create-btn' type="submit" disabled={false}>
                                            Save
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
                <Map />
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

        </main>
    )
}

export default CreateCart