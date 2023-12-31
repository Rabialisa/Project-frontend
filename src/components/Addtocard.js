import React from "react";
import '../Addcard.css';
import { useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

//let AddPlist = sessionStorage.getItem('checkoutItems');
// if (!AddPlist) {
//     AddPlist = [];
//   } else {
//     try {
//         AddPlist = JSON.parse(AddPlist);
//     } catch (error) {
//       console.error('Invalid JSON data in sessionStorage: ', error);
//       AddPlist = [];
//     }
//   }
// console.log(AddPlist);


const AddPlist =[
    {
        id:1,
        name: 'Dell Xps',
        price: 70000,
        imgLink: '/images/images/Dell.jpg',
        desc: 'Core i5 9th generation 256ssd 8GB Ram'
     },
    {
        id:2,
        name: 'Samsung Laptop',
        price: 40000,
        imgLink: '/images/images/la.jpeg',
        desc: 'Corei3 8th generation 128ssd 8GB Ram'
    },
    {
        id:3,
        name: 'HP-laptop',
        price: 40000,
        imgLink: '/images/images/s-l500.jpg',
        desc: 'Core i5 10th gen 256ssd 16GB Ram'
    },
    {
        id:4,
        name: 'Iphone-13',
        price: 50000,
        imgLink: '/images/images/i.jpg',
        desc: '64 storage 4GB Ram'
    },
    {
        id:5,
        name: 'I-phone 14',
        price: 65000,
        imgLink: '/images/images/ip.jpeg',
        desc: '64GB storage 4GB Ram'
    },
    {
        id:6,
        name: 'Iphone 14 Pro-Max',
        price: 143000,
        imgLink: '/images/images/iphone-14-pro-5.jpg',
        desc: 'storage 32GB 4GB Ram'
    }
];
const AddtoCard = () =>{
    const [pmVal, setCount] = useState(1);
    const [total, settotal] = useState(1);
    const handlePrice = ()=>{
        settotal(total);
    }
    const handlemChange = () =>{
        setCount(pmVal-1);
        settotal(pmVal*total);
     }
     const handlepChange = () =>{
        setCount(pmVal+1);
        settotal(pmVal*total);
     }
     
     console.log(total);

    //  console.log('asd')
    //  console.log(AddPlist);

//    return(<>
//         {/* {AddPlist.map(i => i.name)} */}
//    </>)

    return(
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5">
            <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
                <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-black">
                    <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                        <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                        >
                        Your products
                        </MDBTypography>
                        {AddPlist.map(ele => {
                            return (<div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                                <MDBCardImage
                                src={ele.imgLink}
                                fluid
                                style={{ width: "150px" }}
                                alt="p-image"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black">
                                <MDBIcon fas icon="times" />
                                </a>
                                <MDBTypography tag="h5" className="text-primary">
                                    {ele.name}
                                </MDBTypography>
                                <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3" onLoad={handlePrice}>Tk {ele.price}</p>
                                <div className="def-number-input number-input safari_only">
                                    <button className="minus"  onClick={handlemChange}></button>
                                    <input
                                    className="quantity fw-bold text-black"
                                    min={0}
                                    defaultValue={1}
                                    value={pmVal}
                                    type="number"
                                    />
                                    <button className="plus" onClick={handlepChange}></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                        <hr
                        className="mb-4"
                        style={{
                            height: "2px",
                            backgroundColor: "#1266f1",
                            opacity: 1,
                        }}
                        />
                        <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                        >
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                            Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                            Tk {total}
                        </MDBTypography>
                        </div>
                    </MDBCol>
                    <MDBCol lg="5" className="px-5 py-4">
                        <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                        >
                        Payment
                        </MDBTypography>
                        <form className="mb-5">
                        <MDBInput
                            className="mb-5"
                            type="text"
                            size="lg"
                            defaultValue="4321 9078 9012 3421"
                            placeholder="Card Number"
                        />
                        <MDBInput
                            className="mb-5"
                            type="text"
                            size="lg"
                            defaultValue="Lisa"
                            placeholder="Card Name"
                        />
                        <MDBRow>
                            <MDBCol md="6" className="mb-5">
                            <MDBInput
                                className="mb-4"
                                label="Expiration"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                defaultValue="12/23"
                                placeholder="MM/YYYY"
                            />
                            </MDBCol>
                            <MDBCol md="6" className="mb-5">
                            <MDBInput
                                className="mb-4"
                                label="Cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                defaultValue="&#9679;&#9679;&#9679;"
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn block size="lg">
                            <a href="/" style={{color:'#fff',textDecoration:'none'}}>Checkout</a>
                        </MDBBtn>
                        
                        <MDBTypography
                            tag="h5"
                            className="fw-bold mb-5">
                                <br/>
                            <a href="/" style={{textDecoration:'none'}}>
                                <MDBIcon fas icon="angle-left me-2" />
                                Back to shopping
                            </a>
                        </MDBTypography>
                        </form>
                    </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>
    )
}

export default AddtoCard