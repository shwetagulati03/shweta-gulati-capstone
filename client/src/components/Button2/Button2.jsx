import './Button2.scss';

export default function Button2 ({ onClick,children }) {
    return <button className='button2' onClick={onClick}>{children}</button>
}