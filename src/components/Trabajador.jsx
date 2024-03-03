

const Trabajador = ({valor, index}) => {

  return (
    <>
    <div className="columna">
        <div className="fotoUsusario">
            <img src={valor.picture.large} alt="picture" />
            <div className="nombreUsuarios">
                <strong>
                    {valor.name.last}, {valor.name.first}
                </strong>
            </div>
        </div>
        <div>{valor.location.city}</div>
        <div>({valor.location.country})</div>
    </div>
    </>
  )
}

export default Trabajador