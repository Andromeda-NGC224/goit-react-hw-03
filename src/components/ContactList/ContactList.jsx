import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList({ items, onDelete }) {
    return (
        <ul className={css.contactList}>
            {items.map(item => (
                <li className={css.contactListItem} key={item.id}>
                    <Contact name={item.name}
                        number={item.number}
                        id = {item.id}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
)
}