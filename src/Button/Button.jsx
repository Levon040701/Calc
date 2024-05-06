const Button = ({cN, id, text}) => {
    return (
        <li className="listItem"><button className={cN}>{text}</button></li>
    );
};

export default Button;

