const validateCorredor = (req, res, next) => {
    const { id, latitud, longitud } = req.body;

     if (id === undefined || latitud === undefined || longitud === undefined) {
    return res.status(400).send({ error: "Debe enviar id, latitud y longitud" });
    }

    const regex = /^[A-Za-z0-9]{6}$/;
    if (!regex.test(id)) {
        return res.status(400).send({ error: "El ID debe ser alfanumérico de 6 caracteres" });
    }

    if (typeof latitud !== "number" || typeof longitud !== "number") {
        return res.status(400).send({ error: "Latitud y longitud deben ser numéricos" });
    }

    next();
};

export default validateCorredor;