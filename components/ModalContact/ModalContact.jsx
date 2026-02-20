"use client";

import { X, Phone, Check, Mail } from "lucide-react";
import Link from "next/link";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";
import { useState, useEffect } from "react";

const contactSchema = z.object({
  numeContact: z.string().min(3, "Numele este prea scurt (minim 3 caractere)"),
  afacereContact: z.string().optional(),
  emailContact: z.string().email("Adresa de email nu este validă"),
  telefonContact: z.string().regex(/^[0-9]{10,12}$/, "Numărul de telefon este invalid"),
  detaliiContact: z.string().optional()
});

export default function ModalContact({ show, animation, onClose }) {

  const [inputErrors, setInputErrors] = useState({});
  const [statusTrimitereMail, setStatusTrimitereMail] = useState("none");
  const [containerAnimation, setContainerAnimation] = useState(false);
  const [formData, setFormData] = useState({
    numeContact: "",
    afacereContact: "",
    emailContact: "",
    telefonContact: "",
    detaliiContact: "",
  });

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrors({});

    const data = Object.fromEntries(new FormData(e.target));

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      setTimeout(() => {
        setInputErrors(result.error.flatten().fieldErrors);
      }, 10);
      return;
    }

    setStatusTrimitereMail("loading");

    setTimeout(() => {
      setStatusTrimitereMail("trimis");
    }, 1000);
  };

  return createPortal(
    <div className={styles.bodyModalContact} onClick={onClose}>

      <div onClick={() => {
        setContainerAnimation(true);
        setTimeout(() => {
          onClose();
        }, 500);
      }}
        className={styles.closeModalContact}>
        <X size={28} />
      </div>

      <div className={`${styles.containerContact} ${containerAnimation ? styles.scrollDown : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
    <div className={styles.leftPart}>
        <h4>Hai să discutăm!</h4>
        <div className={styles.infoContainerContact}>
          Discutăm 1 la 1 despre proiectul și nevoile tale, iar împreună găsim cele mai bune soluții pentru afacerea ta
        </div>
        <Link href="tel:+40733782872" className={styles.cardContactTelefon}>
          <Phone size={24} />
          Telefon
        </Link>

        <div className={styles.breakLineContact}>
        </div>

        <Link href="https://wa.me/+40733782872" className={styles.cardContactWhatsApp}>
          <FaWhatsapp size={24} />
          What's App
        </Link>

        <div className={styles.breakLineContact}></div>

        <Link href="mailto:contact@georgewebdesign.ro" className={styles.cardContactMail}>
          <Mail size={24} />
            Email
        </Link>
    </div>

    <div className={`${styles.breakLineContact} ${styles.lastBreakLineContact}`}></div>

    
        <form onSubmit={handleSubmit} noValidate>
          <h5>Formular de Contact</h5>

          <div className={`${styles.formWrapper} ${inputErrors.numeContact ? styles.shakeError : ""}`}>
            <input
              type="text"
              name="numeContact"
              id="numeContact"
              placeholder=" "
              autoComplete="off"
              value={formData.numeContact}
              onChange={(e) => setFormData({ ...formData, numeContact: e.target.value })}
            />
            <label htmlFor="numeContact">Nume Complet *</label>
            {inputErrors.numeContact && <span className={styles.errorText}>{inputErrors.numeContact[0]}</span>}
          </div>

          <div className={styles.formWrapper}>
            <input
              type="text"
              name="afacereContact"
              id="afacerelContact"
              placeholder=" "
              value={formData.afacereContact}
              onChange={(e) => setFormData({ ...formData, afacereContact: e.target.value })}
            />
            <label htmlFor="afacerelContact">Nume Afacere</label>
          </div>

          <div className={`${styles.formWrapper} ${inputErrors.emailContact ? styles.shakeError : ""}`}>
            <input
              type="email"
              name="emailContact"
              id="emailContact"
              placeholder=" "
              value={formData.emailContact}
              onChange={(e) => setFormData({ ...formData, emailContact: e.target.value })}
            />
            <label htmlFor="emailContact">Email *</label>
            {inputErrors.emailContact && <span className={styles.errorText}>{inputErrors.emailContact[0]}</span>}
          </div>

          <div className={`${styles.formWrapper} ${inputErrors.telefonContact ? styles.shakeError : ""}`}>
            <input
              type="text"
              name="telefonContact"
              id="telefonContact"
              placeholder=" "
              value={formData.telefonContact}
              onChange={(e) => setFormData({ ...formData, telefonContact: e.target.value })}
            />
            <label htmlFor="telefonContact">Telefon *</label>
            {inputErrors.telefonContact && <span className={styles.errorText}>{inputErrors.telefonContact[0]}</span>}
          </div>

          <div className={styles.formWrapper}>
            <textarea
              rows={5}
              name="detaliiContact"
              id="detaliiContact"
              placeholder=" "
              value={formData.detaliiContact}
              onChange={(e) => setFormData({ ...formData, detaliiContact: e.target.value })}
            />
            <label htmlFor="detaliiContact">Cateva detalii despre proiectul tau</label>
          </div>

          <button
            type="submit"
            id={styles.submitContact}
            className={`${styles.submitContact} ${statusTrimitereMail === "loading" ? styles.buttonLoading : ""}`}
            disabled={statusTrimitereMail === "loading"}
          >
            {statusTrimitereMail === "none" && "Trimite Formular"}

            {statusTrimitereMail === "loading" && (
              <div className={styles.insideButton}>
                <span className={styles.loaderFormular}></span>
                <p>Se trimite...</p>
              </div>
            )}

            {statusTrimitereMail === "trimis" && (
              <div className={styles.insideButton}>
                <Check strokeWidth={3.25} size={24} />
                <p>Formular Trimis</p>
              </div>
            )}
          </button>
        </form>

      </div>
    </div>,
    document.body
  );
}