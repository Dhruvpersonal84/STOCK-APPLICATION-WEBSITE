import axios from "axios";
import { useState, useEffect } from "react";
//import {data, Link} from "react-router-dom"
export default function Oders() {

    let [order, setorder] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8552/allorders").then((res) => {
            setorder(res.data);
        })
    })

    return (
        <div className="orders">
            <h3 className="title">Orders {order.length}</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>mode</th>
                    </tr>
                    {order.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>{order.price}</td>
                                <td>{order.mode}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
        
    )
}