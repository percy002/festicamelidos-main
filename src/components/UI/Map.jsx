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
          // <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1498.2997490712423!2d-71.97414590423281!3d-13.508944054553787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDMwJzMxLjciUyA3McKwNTgnMjUuNSJX!5e1!3m2!1ses!2spe!4v1722446751278!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1498.2997490712423!2d-71.97414590423281!3d-13.508944054553787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDMwJzMxLjciUyA3McKwNTgnMjUuNSJX!5e1!3m2!1ses!2spe!4v1722446751278!5m2!1ses!2spe"
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
