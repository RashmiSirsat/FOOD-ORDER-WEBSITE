export default function Input({ label, id,...props }) {
    return <p className="control">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" name={id} required {...props}  />
    </p>
}