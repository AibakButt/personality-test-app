import data from "../db.json"

const findAll = async () => {
  return Promise.resolve(data)
};

export default {
  findAll
}