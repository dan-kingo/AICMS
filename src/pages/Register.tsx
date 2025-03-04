import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24 flex flex-col items-center justify-center">
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
