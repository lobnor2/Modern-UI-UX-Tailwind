import { useState } from "react";
import styles from "./style";
import "./App.css";
import {
  Navbar,
  Hero,
  Stats,
  CTA,
  Testimonials,
  Footer,
  Billing,
  CardDeal,
  Business,
  Clients,
} from "./components";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.textColor} `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} text-white border border-white`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
