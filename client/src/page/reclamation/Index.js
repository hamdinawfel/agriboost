import React from "react";
import { Redirect } from "react-router";
import Form from "./components/Form";
import Title from "../../utils/Title";


export default function Index() {
  return (
    <div style={{ marginTop: 20 }}>
      {parseInt(process.env.REACT_APP_END_RECLAMATION) <= Date.now() ? (
        <Redirect to='/' />
      ) : null}
      {parseInt(process.env.REACT_APP_END_SUBMSITTION) <= Date.now() ? null : (
        <Redirect to='/' />
      )}
      <Title title='تسجيل الاعتراضات' />
      <p style={{ textAlign: "center", fontSize: 18 }}>
        إنتهاء مهلة تسجيل الاعتراضات يوم 01 نوفمبر 2021
      </p>
      <Form />
    </div>
  );
}
