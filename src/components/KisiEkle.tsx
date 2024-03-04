import Header from "./Header"

const KisiEkle = () => {

    const handleSubmit =(event) => {
        event.preventDefault()

        if()
    }

    return (
        <div >
            <Header />
            <p> burada yeni kişiler eklenecek </p>
            <div className=" container my-5">

                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="firstName"
                            className="form-label">Kişi Adı:</label>
                        <input type="text"
                            className="form-control" id="firstName"
                            placeholder="Ahmet" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName"
                            className="form-label">Soyadı:</label>
                        <input type="text"
                            className="form-control" id="lastName"
                            placeholder="Pektaş" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kisiNumber"
                            className="form-label">Numarası:</label>
                        <input minLength={11} type="number"
                            className="form-control" id="kisiNumber"
                            placeholder="0 504 343 20 87" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="kisiŞehri"
                            className="form-label">Şehri:</label>
                        <input type="text"
                            className="form-control" id="kisiŞehri"
                            placeholder="Hatay" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="yakinlikDerecesi"
                            className="form-label">Y. Derecesi:</label>
                        <input type="text"
                            className="form-control" id="yakinlikDerecesi"
                            placeholder="0 504 343 20 87" />
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