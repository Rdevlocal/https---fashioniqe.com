import React from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import ContactBreadcrumb from "@/components/breadcrumb/contact-breadcrumb";
import ContactArea from "@/components/contact/contact-area";

const ContactPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Contact" />
      <ContactBreadcrumb />
      <ContactArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ContactPage;
