import React from "react"
import { Link } from "react-router-dom"

const ListKisi = ({ kisi }) => {
    console.log(kisi, "kisi içinde ne var")

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-end">
                <Link to={"/kisiEkle"} className="btn btn-success">Kişi ekle</Link>

            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sıra No</th>
                        <th scope="col">Adı</th>
                        <th scope="col">Soyadı</th>
                        <th scope="col">Numarası</th>
                        <th scope="col">Şehri</th>
                        <th scope="col">Y.Derecesi</th>
                        <th scope="col">İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        kisi.length === 0 ? (
                            <tr>
                                <td colSpan={6}>Kayıtlı kişiler bulunmamaktadır.</td>
                            </tr>
                        ) : (
                            <>
                                {
                                    kisi.map((item) => (
                                        <tr key={item.id} >
                                            <th scope="row">{item.id}</th>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.kisiNumber}</td>
                                            <td>{item.kisiŞehri}</td>
                                            <td>{item.yakinlikDerecesi}</td>
                                            <td>
                                                <div className="  p-2 gap-2 d-flex justify-content-start " >
                                                    <button type="button" className="btn btn-sm btn-danger rounded-3">Sil</button>
                                                    <button type="button" className="btn btn-sm btn-warning rounded-3">Güncelle</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </>

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListKisi