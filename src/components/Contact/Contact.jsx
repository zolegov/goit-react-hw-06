import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
const Contact = ({ data, onDelete }) => {
  return (
    <>
      <div>
        <div className={css.personName}>
          <IoPerson />
          {data.name}
        </div>
        <div className={css.personNumber}>
          <FaPhone />
          {data.number}
        </div>
      </div>
      <button
        type="submit"
        className={css.contactDeleteBtn}
        onClick={() => onDelete(data.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
