import getSheetRow from "./getSheetRow";

test("getSheetRow must return exact data from spreadsheet", async () => {
  const id = btoa("'Form Responses 1'!B2:D2"),
    data = await getSheetRow(id);
  console.log(id);
  expect(data.name).toEqual("Đặng H Hương Thư Khùng");
});
