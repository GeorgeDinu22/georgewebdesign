"use client";

import { X, Phone, Check, Mail } from "lucide-react";
import Link from "next/link";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";
import { useState, useEffect } from "react";

const contactSchema = z.object({

  numeContact: z
    .string({
      required_error: "Numele este obligatoriu",
    })
    .trim()
    .min(3, "Numele trebuie să aibă minim 3 caractere")
    .max(60, "Numele este prea lung")
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/, "Numele conține caractere invalide"),

  afacereContact: z
    .string()
    .trim()
    .max(100, "Numele afacerii este prea lung")
    .optional()
    .or(z.literal("")),

  emailContact: z
    .string({
      required_error: "Emailul este obligatoriu",
    })
    .trim()
    .toLowerCase()
    .email("Adresa de email nu este validă")
    .max(120, "Email prea lung"),

  telefonContact: z
    .string({
      required_error: "Telefonul este obligatoriu",
    })
    .trim()
    .transform((val) => val.replace(/\s+/g, "")),

  detaliiContact: z
    .string()
    .trim()
    .max(1000, "Mesajul este prea lung")
    .optional()
    .or(z.literal("")),

  acordDate: z
    .boolean({
      required_error: "Trebuie să accepți politica de confidențialitate",
    })
    .refine((val) => val === true, {
      message: "Trebuie să accepți politica de confidențialitate",
    }),

});

export default function ModalContact({ show, animation, onClose }) {

  const [inputErrors, setInputErrors] = useState({});
  const [statusTrimitereMail, setStatusTrimitereMail] = useState("none");
  const [containerAnimation, setContainerAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(show);
  
  const [sendError, setSendError] = useState("");

  const [formData, setFormData] = useState({
    numeContact: "",
    afacereContact: "",
    emailContact: "",
    telefonContact: "",
    detaliiContact: "",
    acordDate: false, 
  });

  useEffect(() => {
    if (!isVisible) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isVisible]);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setContainerAnimation(true); 
      setTimeout(() => {
        setIsVisible(false);
        setContainerAnimation(false);
      }, 400); 
    }
  }, [show]);

  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (statusTrimitereMail === "loading") return;

    setInputErrors({});
    setSendError(null);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      setInputErrors(result.error.flatten().fieldErrors);
      return;
    }

    setStatusTrimitereMail("loading");

    try {
      // Trimitem formData curat
      const res = await fetch("/api/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();
      // console.log("RESPONSE ESTE: ", responseData);

      if (!res.ok) {
        setSendError(responseData.message || "Eroare de server!");
        setStatusTrimitereMail("none");
        return;
      }

      // succes
      setStatusTrimitereMail("trimis");

      // reset formular
      setFormData({
        numeContact: "",
        afacereContact: "",
        emailContact: "",
        telefonContact: "",
        detaliiContact: "",
        acordDate: false,
      });


    } catch (error) {
      console.error(error);
      setStatusTrimitereMail("none");
      setSendError("Eroare de conexiune. Încearcă din nou.");
    }
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

      <div
      className={`${styles.containerContact} ${
        containerAnimation ? styles.scrollDown : ""
      }`}
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
              type="phone"
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

          <div className={`${styles.privacyConsent} ${inputErrors.acordDate ? styles.shakeError : ""}`}>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                name="acordDate"
                checked={formData.acordDate}
                onChange={(e) => setFormData({ ...formData, acordDate: e.target.checked })}
              />
              <span className={styles.customCheckbox}>
                {formData.acordDate && (
                  <Check size={18} strokeWidth={4} className={styles.checkIcon} />
                )}
              </span>
              <span className={styles.textAcord}>
                Sunt de acord cu{" "}
                <Link href="/politica-confidentialitate" target="_blank">
                  Politica de Confidențialitate
                </Link>
              </span>
            </label>
            {inputErrors.acordDate && (
              <span className={styles.errorText}>{inputErrors.acordDate[0]}</span>
            )}
          </div>

          {sendError && (
            <div className={styles.eroareTrimitere}>
              {sendError}
            </div>
          )}

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