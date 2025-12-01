class Controller{

    constructor(service){
        this.service = service
    }

create = async (req, res) => {
        try {
            const {id,latitud,longitud} = req.body;
            const data = await this.service.createOrUpdate({id,latitud,longitud})
             res.status(201).send(data);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

}


export default Controller