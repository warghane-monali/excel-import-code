import * as XLSX from "xlsx";
  //excel sheet code
  const [sheetLoader, setSheetLoader] = useState(false);

  const downloadExcel = (customHeadings) => {
    let dataSet = [];
    dataSet = customHeadings;
    const worksheet = XLSX.utils.json_to_sheet(dataSet);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "UserDeatils.xlsx");
    setSheetLoader(false);
  };

  const CustomExcel = () => {
    setSheetLoader(true);
    const customHeadings =
      allData !== undefined && allData.length > 0
        ? allData.map((data) => ({
            Name: data.name ?? "-",
            "Contact No": data.contact_no ?? "-",
            Gender: data.gender ?? "-",
            District: data.district_name_en ?? "-",
            जिल्हा: data.district_name_mr ?? "-",
            Taluka: data.taluka_name_en ?? "-",
            तालुका: data.taluka_name_mr ?? "-",
            Grampanchayat: data.grampanchayat_name_en ?? "-",
            ग्रामपंचायत: data.grampanchayat_name_mr ?? "-",
            Village: data.village_name_en ?? "-",
            गाव: data.village_name_mr ?? "-",
          }))
        : "";
    downloadExcel(customHeadings);
  };

    <Button
        variant="contained"
        sx={{
        m: 1,
        backgroundColor: "#a8c74d",
        "&:hover": { backgroundColor: "white", color: "#a8c74d" },
        }}
        onClick={() => CustomExcel()}>
        Excel Sheet <FileDownloadIcon />
    </Button>