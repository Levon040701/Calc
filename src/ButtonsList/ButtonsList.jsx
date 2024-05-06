import Button from "../Button/Button";

const Main = ({btns}) => {
    const jsxArray = [];

    for (const obj of btns) {
        let el;
        if (obj.text === '=') {
            el = <Button cN='red' text={obj.text} id={obj.id} key={obj.id}></Button>;
        } else {
            el = <Button cN='' text={obj.text} id={obj.id} key={obj.id}></Button>;
        }
        jsxArray.push(el);
    }

    return (
        <div className="buttons">
            <ul>{jsxArray}</ul>
        </div>
    );
};

export default Main;

