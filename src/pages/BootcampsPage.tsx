import Navbar from '../components/Navbar';
import BootcampsHero from '../components/bootcamps/BootcampsHero';
import FloatingBootcampCards from '../components/bootcamps/FloatingBootcampCards';
import WhyChooseBootcamps from '../components/bootcamps/WhyChooseBootcamps';
import HowBootcampsWork from '../components/bootcamps/HowBootcampsWork';
import RegistrationProcess from '../components/bootcamps/RegistrationProcess';
import BootcampsFAQ from '../components/bootcamps/BootcampsFAQ';
import Footer from '../components/Footer';

const BootcampsPage = () => {
  return (
    <>
      <Navbar />
      <BootcampsHero />
      <FloatingBootcampCards />
      <WhyChooseBootcamps />
      <HowBootcampsWork />
      <RegistrationProcess />
      <BootcampsFAQ />
      <Footer />
    </>
  );
};

export default BootcampsPage;