import axios from "axios";
import SignUpForm from "@/models/forms/SignUpForm";
import { formatarData } from "@/helpers/index";

const API_URL = process.env.VUE_APP_API_URL;

export async function createUser(user: SignUpForm): Promise<any> {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    institution,
    type,
    cep,
    street,
    streetNumber,
    state,
    city,
    neighborhood,
    complement
  } = user;

  const birthDate = formatarData(user.birthDate);

  const resp = await axios.post(API_URL + "users", {
    firstName,
    lastName,
    email,
    birthDate,
    phoneNumber,
    institution,
    type,
    cep,
    street,
    streetNumber,
    state,
    city,
    neighborhood,
    complement
  });

  return resp.data;
}

export async function getUser(email: string): Promise<any> {
  return axios.get(API_URL + "users/" + email).then(res => res.data);
}
