import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function About() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
        numb: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);
    return (
        <div className="card mx-auto my-4" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Details</h5>
                <h3>Name:{form.name}</h3>
                <h3>Position:{form.position}</h3>
                <h3>Level:{form.level}</h3>
                <h3>Number:{form.numb}</h3>
            </div>
        </div>
    );
}