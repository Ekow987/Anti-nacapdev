import Axios from "axios";
// import {baseURL} from '../lib/Api';

/**
 *
 * @param {object} report
 * {
 *  category: string,
 *  title: string,
 *  details: string,
 *  region: string,
 *  town: string,
 *  location: string (street),
 *  reporter: string || object {fullname: string, email: string, phone: string},
 *  status: "string",
 * }
 *
 * SET ID AND DATE AT BACKEND
 *
 * @returns {object} response
 * {status: boolean, message: string}
 */

async function ReportCase(report) {
  try {
    let response = await Axios({
      method: "POST",
      url: "http://10.5.17.18:80/api/v1/cases/add",
      data: report
    });

    return { response };
  } catch (error) {
    console.log(error.message);
  }
}

export default ReportCase;