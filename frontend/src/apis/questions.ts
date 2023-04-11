import api_client from "./index";

const ENDPOINT = "/questions";

export const get_questions = () =>  api_client.get(`${ENDPOINT}/`);