import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7443.006054769708!2d79.3227541!3d21.1323706!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682446627514!5m2!1sen!2sin" width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;