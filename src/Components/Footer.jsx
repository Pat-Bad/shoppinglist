const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-light position-fixed bottom-0 start-0 w-100">
      <p className="mt-3">Patricia &copy; {currentYear}</p>
    </div>
  );
};

export default Footer;
