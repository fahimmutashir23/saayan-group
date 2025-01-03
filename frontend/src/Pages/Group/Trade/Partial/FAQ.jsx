import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import faq from "../../../../assets/Trade/faq.png";

const FAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center">
      <div className="lg:flex-1">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">
          Frequently Asked <br /> Question
        </h1>
        <div className="flex items-center justify-center mt-5">
          <img src={faq} className="w-1/3" alt="" />
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full lg:flex-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold text-xl">
            1. What services does Saayan Traders offer?
          </AccordionTrigger>
          <AccordionContent>
            We specialize in a wide range of import and export services,
            including sourcing high-quality products, managing logistics, and
            facilitating smooth trade operations. Whether you’re looking for
            agricultural produce, industrial goods, or consumer items, we ensure
            a seamless experience tailored to your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold text-xl">
            2. What types of products do you trade?
          </AccordionTrigger>
          <AccordionContent>
            Saayan Traders deals in a variety of product categories, including
            agricultural items like grains and vegetables, industrial equipment,
            consumer goods such as electronics, and much more. Our extensive
            product range ensures we can cater to diverse business requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold text-xl">
            3. Which countries does Saayan Traders operate in?
          </AccordionTrigger>
          <AccordionContent>
            We have a strong global presence, with operations in countries like
            Malaysia, Saudi Arabia, Dubai, Qatar, Oman, and more. Our
            international network allows us to connect buyers and suppliers
            across multiple regions efficiently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-semibold text-xl">
            4. Why should I choose Saayan Traders over other trading companies?
          </AccordionTrigger>
          <AccordionContent>
            Saayan Traders is committed to delivering excellence through
            reliability, transparency, and quality. With our extensive network,
            competitive pricing, and customer-focused approach, we ensure a
            smooth and trustworthy trading experience for every client.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-semibold text-xl">
            5. How can I get started with Saayan Traders?
          </AccordionTrigger>
          <AccordionContent>
            Getting started is easy! Simply reach out to us via our contact
            form, email, or phone. Our team will guide you through the process,
            understand your requirements, and offer tailored solutions to meet
            your trading needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
