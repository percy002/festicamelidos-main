"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function Map() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <a onClick={() => setOpenModal(true)} className="cursor-pointer">
        UBICACIÓN
      </a>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15517.715905948433!2d-71.9731704!3d-13.5092455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd751ed95bdc1%3A0xb5ef40f9712b9c7e!2sMATELCO!5e0!3m2!1ses-419!2spe!4v1721254392651!5m2!1ses-419!2spe"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[500px]"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}
