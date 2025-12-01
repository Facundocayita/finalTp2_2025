import Service from "../service/Service.js";
import Controller from "../controller/Controller.js";
import Dao from "../Dao/Dao.js";
import Haversine from "../utils/Haversine.js";

const haversine = new Haversine()
const dao = new Dao()
const service = new Service(dao,haversine )
const controller = new Controller(service)

export default controller

