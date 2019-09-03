import axios from "axios";
import { saveAs } from "file-saver";

const API_URL = process.env.VUE_APP_API_URL;

export async function submitWork(
  userId: string,
  title: string,
  file: File
): Promise<any> {
  const form = new FormData();
  form.append("userId", userId);
  form.append("title", title);
  form.append("file", file);

  const resp = await axios.post(API_URL + "submissions", form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return resp.data;
}

export async function getUserSubmissions(userId: string) {
  return axios.get(API_URL + "submissions/" + userId).then(res => res.data);
}

export async function getSubmissions() {
  return axios.get(API_URL + "submissions").then(res => res.data);
}

export function downloadFile(fileName: string) {
  return axios
    .get(API_URL + "submissions/file/" + fileName, { responseType: "blob" })
    .then(res => res.data);
}

export function setSubmissionProofreader(submissionId: number, proofreaderId: number) {
  return axios.put(API_URL + "submissions/" + submissionId, {
    proofreaderId
  }).then(res => res.data);
}

