import axios from "axios";
import IUser from "../types/user";
import {data} from "browserslist";
// you don't need anything else to import

interface Props {
  // TODO: add user type
  username: string;
}

export default function AxiosTest(props: Props) {
  // TODO: once you get data map through data and show them name
  // return <div>Simple Axios And Data Fetching :: Edit src/pages/axios.tsx</div>;
  const { username } = props;
  axios.get("/api/users").then(response => {
  console.log(response.data);
  for (let i = 0; i < response.data.length; i++) {
    console.log(response.data[i]);
  }
  });
  return <div>{username}</div>
}

// axios.get("/api/users").then(response => {
//   console.log(response.data);
//   for (let i = 0; i < response.data.length; i++) {
//     console.log(response.data[i]);
//   }
//   // AxiosTest(response.data[0]);
//
// });
// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
