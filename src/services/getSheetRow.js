import axios from "axios";

export default async function getSheetRow(id) {
  const {
    data: {
      values: [[name, email, wish]],
    },
  } = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${
      process.env.REACT_APP_SPREADSHEET_ID
    }/values/${encodeURIComponent(atob(id))}?key=${
      process.env.REACT_APP_SPREADSHEET_API_KEY
    }`
  );

  return { name, email, wish };
}
