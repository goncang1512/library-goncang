import React, { useRef, useState } from "react";
import Input from "../../elements/InputElementa";
import emailjs from "@emailjs/browser";

function KirimPesan() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h6ofn9j",
        "template_5lalopq",
        form.current,
        "YmD4CLNvY6c6HdH23"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Mengatur ulang nilai input
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const [showModal, setShowModal] = useState(false);

  const modalPesan = () => {
    const closeModal = () => {
      setShowModal(false);
    };

    return (
      <>
        {showModal && (
          <dialog className="modal" open>
            <form
              method="dialog"
              className="modal-box  bg-green-500 p-10 rounded-xl relative"
            >
              <button
                className="absolute top-0 right-0 m-2 p-2 rounded-full w-10 h-10 text-red-500 hover:bg-slate-800 text-lg font-bold text-center"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Pesan berhasil di kirim!</h3>
              <p className="py-4">Pesan berhasil di kirim ke Admin</p>
            </form>
            <form
              method="dialog"
              id="modal_backdrop"
              className="modal-backdrop"
            />
          </dialog>
        )}
      </>
    );
  };

  return (
    <div className="flex justify-center flex-col items-center">
      {modalPesan()}
      <h2 className="text-2xl text-black font-bold mb-3">Kirim Pesan</h2>
      <form
        className="flex flex-col text-lg h-full justify-evenly items-center gap-5"
        ref={form}
        onSubmit={sendEmail}
      >
        <Input
          type="text"
          name="user_name"
          placeholder="Nama"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="number"
          name="user_phone"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <textarea
          name="message"
          placeholder="Pesan"
          className="focus:outline-teal-400 px-6 py-1 text-black"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="bg-teal-400 text-white py-2 w-8/12 rounded-full hover:bg-teal-500"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default KirimPesan;
