import React from "react";
import Style from "./head-cell.module.css";
import { useFormik } from "formik";
export const HeadForm = ({ name }) => {
  const formik = useFormik({
    initialValues: {
        cellValue :name,
    },
  });
  return (<div className={Style.outer}>
    <input type="text" name="cellValue" id ="cellValue"
    value={formik.values.cellValue}
     onChange={formik.handleChange} className={Style.cell}
     
     ></input>
     </div>
  );
};
export default HeadForm;