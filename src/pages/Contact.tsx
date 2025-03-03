const Contact = () => {
  return (
    <div className="md:mx-20 mx-4 my-12">
      {/* <div className="flex items-center flex-col">
        <h1 className="md:text-3xl text-lg font-semibold font-palanquin">
          Contact Us
        </h1>
        <p className="text-gray-600">
          We're here to help! Reach out to us for support, inquiries, or
          feedback.
        </p>
      </div> */}

      <div className="flex gap-8 md:flex-nowrap flex-wrap">
        <div className="flex p-4 bg-white dark:bg-dark h-96 rounded-sm shadow-xl w-full">
          left
        </div>
        <div className="flex p-4 bg-white dark:bg-dark h-96 w-full rounded-sm shadow-xl">
          right
        </div>
      </div>
    </div>
  );
};

export default Contact;
