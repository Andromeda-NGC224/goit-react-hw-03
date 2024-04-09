import Contact from '../Contact/Contact'
import './ContactList.module.css'

export default function ContactList({ items, onDelete }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
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