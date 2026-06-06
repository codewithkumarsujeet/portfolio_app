"use client";
import React, { FormEvent, useRef, useState } from "react";
import Heading from "@/components/heading/heading";
import Card from "@/components/Ui/card";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import ContactCard from "@/components/cards/contact";
import Input from "@/components/Ui/input";
import TextArea from "@/components/Ui/text-area";
import { SiMinutemailer } from "react-icons/si";
import Button from "@/components/Ui/button";
import SelectInput from "@/components/Ui/select-input";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { toast, Toaster } from "react-hot-toast";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [services, setServices] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setServices([]);
    formRef.current?.reset();
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    // console.log({
    //   ...formData,
    //   services: services.join(", "),
    // });
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: services.join(", "),
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }
  
      toast.success("Email sent successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Email not sent, please try again.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div
      id="contact"
      className="pt-20 mt-20 px-1 mx-1 sm:px-3 sm:mx-4 lg:px-8 mb-20"
    >
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {/* Contact Cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+91-7903645513"
              btnText="Call me"
              onClick={() => {
                window.location.href = "tel:+917903645513";
              }}
            />
            <ContactCard
              title="Drop your email"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="sujeet.dev97@gmail.com"
              btnText="Email me"
              onClick={() => {
                window.location.href =
                  "mailto:sujeet.dev97@gmail.com?subject=Contact%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project.";
              }}
            />
            <ContactCard
              title="Chat on WhatsApp"
              icon={<FaSquareWhatsapp className="fill-[#333] text-lg" />}
              text="Only message"
              btnText="WhatsApp"
              onClick={() => {
                window.location.href =
                  "https://wa.me/917903645513?text=Hello,%20I%20would%20like%20to%20discuss%20a%20project.";
              }}
            />
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="2xl:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden px-[25px] py-5 shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                icon={<MdEmail />}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                icon={<MdSubject />}
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>

            {/* Services Selection */}
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-lg">
                What services are you in need of?
              </h1>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-x-5 gap-y-8">
                {servicesOptions.map((service) => (
                  <SelectInput
                    key={service.id}
                    id={service.id}
                    text={service.text}
                    type="checkbox"
                    selectedOptions={services}
                    setSelectOptions={setServices}
                    allowMultiple={true}
                  />
                ))}
              </div>
            </div>

            {/* Text Area message */}
            <TextArea
              name="message"
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
              value={formData.message}
              onChange={handleInputChange}
            />

            <div className="w-full flex justify-end">
              <div
                onClick={() => !isSending && btnRef.current?.click()}
                className={isSending ? "pointer-events-none opacity-60" : ""}
              >
                <Button className="!w-44 !py-3 !text-xl">
                  {isSending ? "Sending..." : "Send"}
                  {!isSending && <SiMinutemailer />}
                </Button>
              </div>
              {/* Hidden services and budget input */}
              <div className="hidden">
                <input
                  type="text"
                  name="services"
                  value={services.join(", ")}
                  readOnly
                />
              </div>
              <button type="submit" hidden ref={btnRef}></button>
              <Toaster /> {/* Replaced ToastContainer with Toaster */}
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

const servicesOptions = [
  { id: "Landing Page", text: "Landing Page" },
  { id: "Frontend Development", text: "Frontend Development" },
  { id: "Full Stack Development", text: "Full Stack Development" },
];
