import LoginView from "../views/LoginView";
import { useFormik } from "formik";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();

  //formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },
    // validasyon şeması,
    // inputlardaki veriler tanımladığımız şemadaki kuşullara uygun mu diye kontrol eder. Eğer geçerli değilse error state'ine taları ekler
    validationSchema: schema,

    // form gönderilince çalışacak olan fonksiyon
    // otomatik olarak sayfa yenilemeyi engeller
    // 1.parametre olarak formdaki verileri alır
    // 2.parametre olarak formda çalışabilecek aksiyonları alır

    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
