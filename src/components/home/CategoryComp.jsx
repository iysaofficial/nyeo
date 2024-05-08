const CategoryComp = () =>{
    return(
        <>
        <section className="category-section" id="category-section">
            <div className="category-container">
                <br />
                <br />
                <br />
                <div className="serviceBox">
                    <div className="icon" style={{"--i":"#0A6847"}}>
                        <img src="./assets/images/icon/Senior High School.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>SMA</h2>
                        <p>Ayo daftarkan sekolah Anda dalam olimpiade ekonomi dan raih prestasi bersama</p>
                    </div>
                </div>

                <div className="serviceBox">
                    <div className="icon" style={{"--i":"#0A6847"}}>
                        <img src="./assets/images/icon/University.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Universitas</h2>
                        <p>Bergabunglah dengan olimpiade ekonomi universitas dan tunjukkan kemampuan Anda</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
             
            </div>
        </section>
        </>
    )
}

export default CategoryComp