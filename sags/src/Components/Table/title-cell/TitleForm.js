import React from "react";
import Style from "../body-cell/Cell.module.css";
import { useFormik } from "formik";
export const TitleForm = ({ name }) => {
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
export default TitleForm;