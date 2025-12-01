class Dao{
    corredores=[];

   createOrUpdate = async ({ id, latitud, longitud }) => {
        const index = this.corredores.findIndex(c => c.id === id);

        if (index !== -1) {
            this.corredores[index].latitud = latitud;
            this.corredores[index].longitud = longitud;
            return this.data[index];
        }

        const corredor = { id, latitud, longitud };
        this.corredores.push(corredor);
        return corredor;
    };
}

export default Dao