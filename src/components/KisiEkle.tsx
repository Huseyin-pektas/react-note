import axios from "axios"
import Header from "./Header"
import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const KisiEkle = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [kisiNumber, setKisiNumber] = useState("")
    const [kisiŞehri, setKisiŞehri] = useState("")
    const [yakinlikDerecesi, setYakinlikDerecesi] = useState("")
    const [kisi, setKisi] = useState(null)
    
    const saveKisi = (event) => {
        event.preventDefault()

        if (firstName === "" ||
            lastName === "" ||
            kisiNumber === "" ||
            kisiŞehri === "" ||
            yakinlikDerecesi === "") {
            alert("Lütfen bütün alanları doldurunuz")
            return
        }
        const YeniKisi = {
            id: String(new Date().getTime()),
            firstName: firstName,
            lastName: lastName,
            kisiNumber: kisiNumber,
            kisiŞehri: kisiŞehri,
            yakinlikDerecesi: yakinlikDerecesi
        }
        axios.post("http://localhost:3005/kisi", YeniKisi)
            .then((res) => { navigate("/") })
            .catch((err) => { })
    }
    useEffect(() => {
        axios.get("http://localhost:3005/kisi")
        .then((res) => {
            console.log(res, "resste ne var")
        })
        .catch((err) => { console.log(err, "hata varmı") })
    }, [])

    // if(kisi === null){
    //     return null
    //   }


    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const regex = /^[0-9]*$/; // Sadece rakamları kabul eden regex deseni
    
        if (regex.test(inputValue)) {
            setKisiNumber(inputValue);
        }
    };
    return (
        <div >
            <Header />
            <p> burada yeni kişiler eklenecek </p>
            <div className=" container my-5">

                <form onSubmit={saveKisi} >
                    <div className="mb-3">
                        <label htmlFor="firstName"
                            className="form-label">Kişi Adı:</label>
                        <input type="text"
                            className="form-control" id="firstName"
                            placeholder="Ahmet"
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName"
                            className="form-label">Soyadı:</label>
                        <input type="text"
                            className="form-control" id="lastName"
                            placeholder="Pektaş"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kisiNumber"
                            className="form-label">Numarası:</label>
                        <input minLength={11} maxLength={11}  type="tel"
                            className="form-control" id="kisiNumber"
                            placeholder="0 504 343 20 87"
                            value={kisiNumber}
                            onChange={event => handleInputChange(event)
                            // setKisiNumber(event.target.value)
                            } />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kisiŞehri"
                            className="form-label">Şehri:</label>
                        <input type="text"
                            className="form-control" id="kisiŞehri"
                            placeholder="Hatay"
                            value={kisiŞehri}
                            onChange={event => setKisiŞehri(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="yakinlikDerecesi"
                            className="form-label">Y. Derecesi:</label>
                        <input type="text"
                            className="form-control" id="yakinlikDerecesi"
                            placeholder="Ailesi"
                            value={yakinlikDerecesi}
                            onChange={event => setYakinlikDerecesi(event.target.value)} />
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <button type="submit" className="btn btn-success w-50">Kaydet</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default KisiEkle