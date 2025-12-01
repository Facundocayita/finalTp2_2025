class Service {
    constructor(dao, haversine) {
        this.dao = dao;
        this.haversine = haversine;
    }

    createOrUpdate = async ({ id, latitud, longitud }) => {
        const corredor = await this.dao.createOrUpdate({ id, latitud, longitud });
        const corredores = this.dao.corredores;
        const IdPeligros = [];

        for (const c of corredores) {
            if (c.id === id) continue;

            const distancia = this.haversine.distanciaGPS(
                latitud,
                longitud,
                c.latitud,
                c.longitud
            );

            if (distancia < 50) {
                IdPeligros.push({
                    id: c.id
                });
            }
        }

        return {
            IdPeligros
        };
    };
}

export default Service;