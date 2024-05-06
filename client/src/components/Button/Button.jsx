import './Button.scss';

export default function Button ({ onClick,children }) {
    return <button className='primary-button' onClick={onClick}>{children}</button>
}